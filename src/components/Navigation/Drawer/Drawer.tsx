import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Backdrop from '../../UI/Backdrop/Backdrop';
import styled from 'styled-components';

interface DrawerProps {
    onClose: () => void;
    isOpen: boolean;
}

interface DrawerLinksProps {
    to: string;
    exact: boolean;
    label: string;
}

class Drawer extends Component<DrawerProps> {
    clickHandler = () => {
        this.props.onClose();
    };

    renderLinks = (links: DrawerLinksProps[]) => {
        return links.map((link, index) => {
            return (
                <NavListItem key={index}>
                    <NavListLink to={link.to} exact={link.exact} activeClassName={'active'} onClick={this.clickHandler}>
                        {link.label}
                    </NavListLink>
                </NavListItem>
            );
        });
    };

    render() {
        const links: DrawerLinksProps[] = [
            { to: '/', label: 'Post List', exact: true },
            { to: '/post-creator', label: 'Create post', exact: false },
        ];

        return (
            <>
                <Nav className={!this.props.isOpen ? 'close' : ' '}>
                    <NavList>{this.renderLinks(links)}</NavList>
                </Nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
            </>
        );
    }
}

const Nav = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 80%;
    max-width: 300px;
    padding: 20px 10px;
    box-sizing: border-box;
    background: #fff;
    z-index: 90;
    transform: translateX(0px);
    transition: transform 0.22s ease-in;
    &.close {
        transform: translateX(-300px);
    }
`;

const NavList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const NavListItem = styled.li`
    margin-bottom: 15px;
`;

const NavListLink = styled(NavLink)`
    color: #363f54;
    font-size: 30px;
    text-decoration: none;
    background-color: #fff;
    position: relative;
    padding: 0 20px 10px 20px;
    transition: opacity 0.3s;
    &:hover {
        color: #363f54;
        font-size: 30px;
        text-decoration: none;
        background-color: #fff;
        position: relative;
        padding: 0 20px 10px 20px;
        opacity: 0.7;
    }
`;

export default Drawer;
