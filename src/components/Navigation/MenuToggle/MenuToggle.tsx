import React from 'react';
import styled from 'styled-components';

interface MenuToggleProps {
    onToggle: () => void;
    isOpen: boolean;
}

const MenuToggle = (props: MenuToggleProps) => {
    const cls = ['fa'];

    if (props.isOpen) {
        cls.push('fa-times');
        cls.push('open');
    } else {
        cls.push('fa-bars');
    }

    return <ToogleIcon className={cls.join(' ')} onClick={props.onToggle} />;
};

const ToogleIcon = styled.i`
    position: fixed;
    top: 40px;
    left: 40px;
    cursor: pointer;
    color: #fff;
    z-index: 100;
    font-size: 20px;
    transition: opacity, left, 0.22s ease-in;
    &:hover {
        opacity: 0.7;
    }
    &.open {
        left: 320px;
    }
`;

export default MenuToggle;
