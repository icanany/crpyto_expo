import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background: ${props => props.background === 'main' ? "#e50134" : "white"};
    color: ${props => props.background === 'main' ? "white" : "#e50134"};
    border-radius: 10px;
    width: 175px;
    line-height: 48px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    cursor: pointer;
    margin : 0px  ${props => props.marginX + 'px'};
    &:hover {
        background: ${props => props.background === 'main' ? "white" : "#e50134"};
        color: ${props => props.background === 'main' ? "#e50134" : "white"};
    }
`;

function Button({ name = "Button", background = 'main', marginX = 0}) {
    return (
        <div>
            <StyledButton background={background} marginX = {marginX}>{name}</StyledButton>
        </div>
    );
}

export default Button;
