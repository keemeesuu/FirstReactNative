import React from 'react';
import styled from 'styled-components/native';

const ButtonContainer = styled.Pressable`
    background-color: ${props =>
        props.title === 'keemeesuu' ? props.theme.blue : props.theme.purple};
    border-radius: 15px;
    padding: 15px 40px;
    margin: 10px 0px;
    justify-content: center;
`;

const Title = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: #fff;
`;

const Button = props => {
    return (
        <ButtonContainer>
            <Title>{props.title}</Title>
        </ButtonContainer>
    );
};

export default Button;