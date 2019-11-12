import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonProps {
    type?: any;
    disabled?: boolean;
    children: ReactNode;
    onClick(event: React.MouseEvent<HTMLElement>): void;
}

const Button = (props: ButtonProps) => {
    return (
        <CustomButton onClick={props.onClick} className={props.type} disabled={props.disabled}>
            {props.children}
        </CustomButton>
    );
};

const CustomButton = styled.button`
    display: inline-block;
    padding: 10px 20px;
    border-radius: 4px;
    border: 1px solid #ccc;
    color: #000;
    margin-right: 15px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    &:focus {
        outline: none;
    }
    &:active {
        box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.3);
    }
    &.error {
        background: rgba(240, 87, 108, 1);
    }
    &.success {
        background: rgba(161, 240, 69, 1);
    }
    &.primary {
        background: #2884f6;
        color: #fff;
    }
    &:disabled {
        background: #ccc;
        color: #000;
        cursor: not-allowed;
    }
`;

export default Button;
