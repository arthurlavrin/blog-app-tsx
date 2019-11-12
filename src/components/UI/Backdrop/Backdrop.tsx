import React from 'react';
import styled from 'styled-components';

interface BackdropProps {
    onClick?: () => void;
}

const Backdrop = (props: BackdropProps) => <Container onClick={props.onClick} />;

const Container = styled.h1`
    z-index: 50;
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0;
`;

export default Backdrop;
