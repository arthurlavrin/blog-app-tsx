import React, { Component } from 'react';
import { fetchPostById } from '../../store/actions/blog';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { AppState } from '../../store/configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../types/actions';
import { bindActionCreators } from 'redux';
import Post from '../../components/Post/Post';

import { History, LocationState } from 'history';
import Loader from 'react-loader-spinner';

interface PostPageProps {
    id?: any;
    title?: string;
    loaded?: boolean;
    posts?: [];
    post?: [];
    match: any;
    history: History<LocationState>;
}
type Props = PostPageProps & LinkStateProps & LinkDispatchProps;

class PostPage extends Component<Props, {}> {
    componentDidMount() {
        this.props.fetchPostById(this.props.match.params.id, this.props.history);
    }

    render() {
        const postContent = this.props.loaded ? (
            <Post history={this.props.history} post={this.props.post} />
        ) : (
            <Spinner type="Puff" color="#00BFFF" height={100} width={100} />
        );

        return (
            <PostWrapper>
                <Wrapper>
                    <PostPageTitle>Post</PostPageTitle>
                    {postContent}
                </Wrapper>
            </PostWrapper>
        );
    }
}

interface LinkStateProps {
    loaded: any;
    post: any;
}

interface LinkDispatchProps {
    fetchPostById: (id: any, history: any) => void;
}

const mapStateToProps = (state: AppState, ownProps: PostPageProps): LinkStateProps => ({
    loaded: state.blog.loaded,
    post: state.blog.post,
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: PostPageProps,
): LinkDispatchProps => ({
    fetchPostById: bindActionCreators(fetchPostById, dispatch),
});

const Wrapper = styled.div`
    width: 800px;
    padding: 15px;
    box-shadow: 0px 0px 10px #000000c2;
    background: #ffffff1f;
    height: 80vh;
    overflow: auto;
`;

const PostWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 100px;
    flex-grow: 1;
    width: 100%;
    background: linear-gradient(90deg, #5041b2 0%, #7969e6 100%);
`;

const PostPageTitle = styled.h1`
    color: #fff;
    margin-left: 10px;
    text-align: center;
`;

const Spinner = styled(Loader)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
`;

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
