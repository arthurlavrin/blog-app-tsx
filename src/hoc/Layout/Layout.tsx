import React, { Component, ReactNode } from 'react';
import Drawer from '../../components/Navigation/Drawer/Drawer';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import styled from 'styled-components';

type Props = {
    children: ReactNode;
};

class Layout extends Component<Props> {
    state = {
        menu: false,
    };

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu,
        });
    };

    menuCloseHandler = () => {
        this.setState({
            menu: false,
        });
    };

    render() {
        return (
            <Wrapper>
                <Drawer isOpen={this.state.menu} onClose={this.menuCloseHandler} />

                <MenuToggle onToggle={this.toggleMenuHandler} isOpen={this.state.menu} />

                <MainWrapper>{this.props.children}</MainWrapper>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export default Layout;
