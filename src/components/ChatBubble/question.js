import React from 'react';
import { StyledQuestionBubble } from './styles';

function QuestionBubble({ el }) {
    return (
        <StyledQuestionBubble key={el.id}>
            <div className="bubble__text">{el.ques}</div>
            <div className="bubble__avatar">
                <span>
                    <img src="/man-avatar.webp" />
                </span>
            </div>
        </StyledQuestionBubble>
    );
}

export default QuestionBubble;
