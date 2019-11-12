import React, { Component, MouseEvent } from 'react';
import { createControl, validate, validateForm } from '../../form/formFramework';
import { connect } from 'react-redux';
import { finishCreatePost, savePostInStore } from '../../store/actions/create';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

import styled from 'styled-components';
import { AppState } from '../../store/configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../types/actions';
import { bindActionCreators } from 'redux';

interface PostCreatorPageState {
    isFormValid: boolean;
    formControls: object;
    onChange?: any;
}

type Props = LinkStateProps & LinkDispatchProps;

function createFormControls() {
    return {
        title: createControl(
            {
                label: 'Subject',
                errorMessage: 'Could not be empty',
            },
            { required: true },
        ),
        body: createControl(
            {
                label: 'What you think',
                errorMessage: 'Could not be empty',
            },
            { required: true },
        ),
    };
}

class PostCreator extends Component<Props, PostCreatorPageState> {
    state = {
        isFormValid: false,
        formControls: createFormControls(),
    };

    submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    };

    createPostHandler = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        this.setState({
            isFormValid: false,
            formControls: createFormControls(),
        });
        this.props.finishCreatePost();
    };

    changeHandler = (value: any, controlName: string) => {
        const formControls: any = { ...this.state.formControls };
        const control = { ...formControls[controlName] };

        control.touched = true;
        control.value = value;
        control.valid = validate(control.value, control.validation);

        formControls[controlName] = control;

        this.setState({
            formControls,
            isFormValid: validateForm(formControls),
        });

        this.props.savePostInStore({ value, controlName });
    };

    renderControls() {
        const titleControl = this.state.formControls.title;
        const bodyControl = this.state.formControls.body;

        return (
            <>
                <Input
                    label={titleControl.label}
                    value={titleControl.value}
                    valid={titleControl.valid}
                    shouldValidate={!!titleControl.validation}
                    touched={titleControl.touched}
                    errorMessage={titleControl.errorMessage}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        this.changeHandler(event.target.value, 'title')
                    }
                />
                <Input
                    label={bodyControl.label}
                    value={bodyControl.value}
                    valid={bodyControl.valid}
                    shouldValidate={!!bodyControl.validation}
                    touched={bodyControl.touched}
                    errorMessage={bodyControl.errorMessage}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        this.changeHandler(event.target.value, 'body')
                    }
                />
            </>
        );
    }

    render() {
        return (
            <Wrapper>
                <PostCreatorWrapper>
                    <PostCreatorTitle>Post creation</PostCreatorTitle>

                    <Form onSubmit={this.submitHandler}>
                        {this.renderControls()}

                        <Button
                            type="success"
                            onClick={this.createPostHandler}
                            disabled={this.props.post.title.length === 0 || this.props.post.body.length === 0}
                        >
                            Create post
                        </Button>
                    </Form>
                </PostCreatorWrapper>
            </Wrapper>
        );
    }
}

interface LinkStateProps {
    post: any;
}

interface LinkDispatchProps {
    finishCreatePost: () => void;
    savePostInStore: (val: object) => void;
}

const mapStateToProps = (state: AppState, ownProps: {}): LinkStateProps => ({
    post: state.create.post,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>, ownProps: {}): LinkDispatchProps => ({
    finishCreatePost: bindActionCreators(finishCreatePost, dispatch),
    savePostInStore: bindActionCreators(savePostInStore, dispatch),
});

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    flex-grow: 1;
    width: 100%;
    background: linear-gradient(270deg, #f0613c 0%, #f0783c 100%);
`;

const PostCreatorWrapper = styled.div`
    display: flex;
    justify-content: end;
    padding-top: 20px;
    flex-grow: 1;
    width: 100%;
    background: linear-gradient(270deg, #f0613c 0%, #f0783c 100%);
    flex-direction: column;
`;

const PostCreatorTitle = styled.h1`
    text-align: center;
`;

const Form = styled.form`
    text-align: center;
    width: 80%;
    margin: 0 auto;
`;

export default connect(mapStateToProps, mapDispatchToProps)(PostCreator);
