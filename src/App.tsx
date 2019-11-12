import React from 'react';
import { Route, Switch, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
import PostList from './containers/PostList/PostList';
import PostPage from './containers/PostPage/PostPage';
import PostCreator from './containers/PostCreator/PostCreator';
import Layout from './hoc/Layout/Layout';

function App({}: RouteComponentProps): JSX.Element {
    const routes = (
        <Switch>
            <Route path="/post-creator" component={PostCreator} />
            <Route path="/post/:id" component={PostPage} />
            <Route path="/" exact={true} component={PostList} />
            <Redirect to={'/'} />
        </Switch>
    );

    return <Layout>{routes}</Layout>;
}

export default withRouter(App);
