import React from 'react';
import CommentsComponent from '../../components/CommentsComponent/CommentsComponent';
import Button from '../UI/Button/Button';
import { deletePost } from '../../store/actions/blog';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../types/actions';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

interface PostProps {
    post?: any;
    title?: string;
    history: any;
}

type Props = PostProps & LinkDispatchProps;

class Post extends React.Component<Props, {}> {
    deletePostHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();

        this.props.deletePost(this.props.post.id, this.props.history);
    };

    render() {
        return (
            <PostWrapper>
                <PostTitle>{this.props.post.title}</PostTitle>
                <PostBody>{this.props.post.body}</PostBody>
                <Button type="success" onClick={this.deletePostHandler}>
                    Delete post
                </Button>

                <CommentsComponent comments={this.props.post.comments} />
            </PostWrapper>
        );
    }
}

interface LinkDispatchProps {
    deletePost: (id: any, history: any) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>, ownProps: PostProps): LinkDispatchProps => ({
    deletePost: bindActionCreators(deletePost, dispatch),
});

const PostWrapper = styled.div``;

const PostTitle = styled.h3`
    text-align: center;
`;

const PostBody = styled.p`
    margin-bottom: 20px;
`;

export default connect(null, mapDispatchToProps)(Post);
