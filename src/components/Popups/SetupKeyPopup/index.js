import React, { useState } from 'react';
import { StyledSetupKeyPopup } from './styles';
import Close from '../../Svg/Close';

function SetupKeyPopup({ dispatch, toggleSetupKeyPopup }) {
    const [apiKey, setApiKey] = useState('');

    const handleStoreApiKey = () => {
        localStorage.setItem('api_key', apiKey);
        dispatch(toggleSetupKeyPopup(false));
    };

    return (
        <StyledSetupKeyPopup>
            <div className="title">
                <span>Setup your OpenAI API key</span>
                <button className="close-btn" onClick={() => dispatch(toggleSetupKeyPopup(false))}>
                    <Close />
                </button>
            </div>
            <div className="content">
                <div className="input-container">
                    <label htmlFor="api-key">OpenAI API Key</label>
                    <input type="text" id="api-key" onChange={(e) => setApiKey(e.target.value)} />
                </div>
                <div className="notes">
                    <p>
                        Don't have an API key? Get it{' '}
                        <a href="https://platform.openai.com/api-keys">here</a>.
                    </p>
                    <p style={{ fontStyle: 'oblique' }}>
                        Your key is exclusively stored on your browser and never shared with any
                        third-party entity. It is solely used for the intended purpose of accessing
                        the OpenAI API and not for any other unauthorized use.
                    </p>
                </div>
                <div className="submit-btn">
                    <button onClick={handleStoreApiKey}>Submit</button>
                </div>
            </div>
        </StyledSetupKeyPopup>
    );
}

export default SetupKeyPopup;
