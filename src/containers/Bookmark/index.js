import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Bookmarks from '../../components/Bookmarks';
import {
    handleHamburgerMenu,
    handleInputQuery,
    handleShowBookmarks,
    setInputQuestion,
    setThinking
} from '../../redux/queryReducer';
import { queryIndex } from '../../apis/queryIndex';
import { v4 as uuid } from 'uuid';

function Bookmark() {
    const { data, bookmarks } = useSelector((store) => store.queryReducer);
    const dispatch = useDispatch();
    const [resp, setResp] = useState(null);

    const handleSelectBookmark = (bookmark) => {
        const obj = [...data];
        obj.push({
            id: uuid(),
            ques: bookmark.question,
            ans: '',
            error: ''
        });

        dispatch(handleInputQuery(obj));
        dispatch(setThinking(true));
        dispatch(setInputQuestion(bookmark));
        dispatch(handleShowBookmarks(false));
        dispatch(handleHamburgerMenu(false));

        handleFetch(bookmark);
    };

    useEffect(() => {
        if (resp) handleData();
    }, [resp]);

    const handleData = () => {
        dispatch(setThinking(false));

        const obj = [...data];

        obj[obj.length - 1] = {
            ...data[obj.length - 1],
            ans: resp.output,
            error: resp.error,
            bookmarked: false
        };

        dispatch(handleInputQuery(obj));
    };

    const handleFetch = async (bookmark) => {
        try {
            const obj = {
                role: 'user',
                content: bookmark.question
            };
            const data = await queryIndex(obj);
            setResp({ output: data, error: false });
        } catch (error) {
            setTimeout(() => {
                setResp({ output: 'Something went wrong. Pls try again.', error: true });
            }, 1000);
        }
    };

    return (
        <>
            <Bookmarks onClick={handleSelectBookmark} data={bookmarks} />
        </>
    );
}

export default Bookmark;
