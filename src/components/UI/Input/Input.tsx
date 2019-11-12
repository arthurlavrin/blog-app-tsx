import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface InputProps {
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
    type?: any;
    value: string;
    errorMessage: string;
    valid: boolean;
    touched: boolean;
    shouldValidate: boolean;
    label: string;
}

function isInvalid({ valid, touched, shouldValidate }: { valid: boolean; touched: boolean; shouldValidate: boolean }) {
    return !valid && shouldValidate && touched;
}

const Input = (props: InputProps) => {
    const inputType = props.type || 'text';
    const htmlFor = `${inputType}-${Math.random()}`;

    const errorMessage = isInvalid(props) ? (
        <ErrorMsg>{props.errorMessage || 'Введите верное значение'}</ErrorMsg>
    ) : null;
    return (
        <InputWrapper>
            <Label className={isInvalid(props) ? 'invalid' : ' '} htmlFor={htmlFor}>
                {props.label}
            </Label>
            <CustomInput type={inputType} id={htmlFor} value={props.value} onChange={props.onChange} />
            {errorMessage}
        </InputWrapper>
    );
};

const InputWrapper = styled.div`
    margin-bottom: 15px;
`;

const Label = styled.label`
    margin-bottom: 3px;
    padding: 0;
    display: block;
    font-weight: bold;
    &.invalid {
        color: #f01f30;
    }
`;

const CustomInput = styled.input`
    display: block;
    box-sizing: border-box;
    border: 1px solid #bebebe;
    padding: 7px;
    margin: 0 0 5px;
    width: 100%;
    outline: none;
    transition: all 0.3s ease-in-out;
`;

const ErrorMsg = styled.span`
    color: #f01f30;
    font-size: 12px;
    font-weight: bold;
`;

export default Input;
