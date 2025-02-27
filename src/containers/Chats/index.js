import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AnswerBubble from '../../components/ChatBubble/answer';
import QuestionBubble from '../../components/ChatBubble/question';
import Loading from '../../components/Loading';
import { handleInputQuery, resetBookmarks, setBookmarks } from '../../redux/queryReducer';

function Chats() {
    const { data, thinking, bookmarks, inputQuestion } = useSelector((store) => store.queryReducer);
    const dispatch = useDispatch();
    const chatEndRef = useRef(null);

    useEffect(() => {
        if (inputQuestion) {
            chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [thinking]);

    const handleBookmark = (item) => {
        let obj = [...data];

        obj.map((el, idx) => {
            if (el.id === item.id) {
                if (el['bookmarked']) {
                    obj[idx] = {
                        ...obj[idx],
                        bookmarked: false
                    };
                    const removeBookmark = bookmarks.filter((el) => el.id !== item.id);
                    dispatch(resetBookmarks(removeBookmark));
                } else {
                    obj[idx] = {
                        ...obj[idx],
                        bookmarked: true
                    };
                    dispatch(setBookmarks(item));
                }
            }
        });

        dispatch(handleInputQuery(obj));
    };

    const handleCopyAnswer = (textToCopy) => {
        navigator.clipboard.writeText(textToCopy);
    };

    return (
        <>
            {data.map((el, idx) => (
                <>
                    {el.ques && <QuestionBubble el={el} />}
                    {el.ans && (
                        <AnswerBubble
                            handleBookmark={handleBookmark}
                            handleCopyAnswer={handleCopyAnswer}
                            el={el}
                            idx={idx}
                        />
                    )}
                </>
            ))}
            {thinking && <Loading />}
            <div ref={chatEndRef}></div>
        </>
    );
}

export default Chats;
