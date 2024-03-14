import { parseEventSource } from '../utils';

export const readDataStream = async (stream) => {
    try {
        if (stream) {
            if (stream.locked)
                throw new Error('Oops, the stream is locked right now. Please try again');

            const reader = stream.getReader();
            let reading = true;
            let partial = '';
            let content = '';

            while (reading) {
                const { done, value } = await reader.read();
                const result = parseEventSource(partial + new TextDecoder().decode(value));
                partial = '';

                if (result === '[DONE]' || done) {
                    reading = false;
                } else {
                    // eslint-disable-next-line no-loop-func
                    const resultString = result.reduce((output, curr) => {
                        if (typeof curr === 'string') {
                            partial += curr;
                        } else {
                            const content = curr.choices[0]?.delta?.content ?? null;
                            if (content) output += content;
                        }
                        return output;
                    }, '');

                    content += resultString;
                }
            }

            reader.releaseLock();
            stream.cancel();

            return content;
        }
    } catch (error) {
        throw new Error(error);
    }
};
