import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../../store/actions/blog';
import styled from 'styled-components';
import { AppState } from '../../store/configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../types/actions';
import Loader from 'react-loader-spinner';
import { bindActionCreators } from 'redux';

interface PostListProps {
    id?: any;
    title?: string;
    loaded?: boolean;
    posts?: [];
    post?: [];
}

type Props = PostListProps & LinkStateProps & LinkDispatchProps;

class PostList extends Component<Props, {}> {
    renderPosts = () => {
        return this.props.posts.map((post: PostListProps) => {
            return (
                <ListItem key={post.id}>
                    <ListLink to={'/post/' + post.id}>{post.title}</ListLink>
                </ListItem>
            );
        });
    };

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const content =
            this.props.loaded && this.props.posts.length !== 0 ? (
                <List>{this.renderPosts()}</List>
            ) : (
                <Spinner type="Puff" color="#00BFFF" height={100} width={100} />
            );
        return (
            <PostListWrapper>
                <InnerWrapper>
                    <PostListTitle>List of latest post</PostListTitle>
                    {content}
                </InnerWrapper>
            </PostListWrapper>
        );
    }
}

interface LinkStateProps {
    posts: any;
    loaded: any;
}

interface LinkDispatchProps {
    fetchPosts: () => void;
}

const mapStateToProps = (state: AppState, ownProps: PostListProps): LinkStateProps => ({
    posts: state.blog.posts,
    loaded: state.blog.loaded,
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: PostListProps,
): LinkDispatchProps => ({
    fetchPosts: bindActionCreators(fetchPosts, dispatch),
});

const PostListWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 100px;
    flex-grow: 1;
    width: 100%;
    background: linear-gradient(90deg, #fd8355 0%, #f0576c 37%, #f79cbd 100%);
`;

const InnerWrapper = styled.div`
    text-align: center;
    width: 800px;
    padding: 15px;
    box-shadow: 0px 0px 10px #000000c2;
    background: #ffffff1f;
    height: 80vh;
    overflow: auto;
`;

const PostListTitle = styled.h1`
    color: #fff;
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const ListItem = styled.li`
    margin-bottom: 10px;
`;

const ListLink = styled(NavLink)`
    text-decoration: none;
    color: #fff;
    &:hover {
        color: #363f54;
    }
`;

const Spinner = styled(Loader)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
`;

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
