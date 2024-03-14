export const parseEventSource = (data) => {
    const result = data
        .split('\n\n')
        .filter(Boolean)
        .map((chunk) => {
            const jsonString = chunk
                .split('\n')
                .map((line) => line.replace(/^data: /, ''))
                .join('');
            if (jsonString === '[DONE]') return jsonString;
            try {
                const json = JSON.parse(jsonString);
                return json;
            } catch {
                return jsonString;
            }
        });
    return result;
};
