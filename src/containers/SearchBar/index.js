import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INITIAL_DATA_STATE } from '../../components/constants';
import SearchBox from '../../components/SearchBox';
import { handleInputQuery, setInputQuestion, setThinking } from '../../redux/queryReducer';
import { queryIndex } from '../../apis/queryIndex';
import { v4 as uuid } from 'uuid';

function SearchBar() {
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const [resp, setResp] = useState({});
    const { data, inputQuestion } = useSelector((store) => store.queryReducer);

    useEffect(() => {
        setTimeout(() => {
            dispatch(setThinking(false));
            dispatch(handleInputQuery([INITIAL_DATA_STATE]));
        }, 1000);
    }, []);

    useEffect(() => {
        if (resp) handleData();
    }, [resp]);

    const handleFetch = async () => {
        inputRef.current.value = '';
        dispatch(setThinking(true));

        const obj = [...data];

        obj.push({
            id: uuid(),
            ques: inputQuestion,
            ans: '',
            error: ''
        });

        dispatch(handleInputQuery(obj));

        try {
            const inputQuery = {
                role: 'user',
                content: inputQuestion
            };

            const data = await queryIndex(inputQuery);

            if (typeof data === 'string') {
                const obj = { output: data, error: false };
                setResp({ ...obj });
            } else {
                setResp({ output: 'Something went wrong. Pls try again.', error: true });
            }
        } catch (error) {
            setResp({ output: 'Something went wrong. Pls try again.', error: true });
        }
    };

    const handleData = () => {
        dispatch(setThinking(false));
        const obj = [...data];

        obj[obj.length - 1] = {
            ...data[obj.length - 1],
            ques: inputQuestion,
            ans: resp.output,
            error: resp.error,
            bookmarked: false
        };

        dispatch(handleInputQuery(obj));
    };

    return (
        <>
            <SearchBox
                onClick={handleFetch}
                onChange={setInputQuestion}
                inputRef={inputRef}
                dispatch={dispatch}
            />
        </>
    );
}

export default SearchBar;
