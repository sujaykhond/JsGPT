import React, { forwardRef } from 'react';
import Send from '../Svg/Send';
import { StyledSearchBox, StyledSendButton } from './styles';

function SearchBox({ onClick, onChange, inputRef }) {
    return (
        <StyledSearchBox>
            <input
                type="text"
                placeholder="Ask a question..."
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onClick(e)}
                ref={inputRef}
            />
            <StyledSendButton onClick={onClick}>
                <Send />
            </StyledSendButton>
        </StyledSearchBox>
    );
}

export default forwardRef(SearchBox);
