import { readDataStream } from '../services';

const endpoint = process.env.REACT_APP_API_ENDPOINT;

const config = {
    model: 'gpt-3.5-turbo',
    max_tokens: 4000,
    temperature: 1,
    presence_penalty: 0,
    top_p: 1,
    frequency_penalty: 0
};

const headers = {
    'Content-Type': 'application/json'
};

export const queryIndex = async (inputQuery) => {
    const apiKey = localStorage.getItem('api_key');
    headers.Authorization = `Bearer ${apiKey}`;

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                messages: [inputQuery],
                ...config,
                max_tokens: undefined,
                stream: true
            })
        });

        const stream = response.body;
        return await readDataStream(stream);
    } catch (error) {
        throw new Error(error);
    }
};
