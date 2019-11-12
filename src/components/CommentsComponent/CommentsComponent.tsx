import React from 'react';
import styled from 'styled-components';

interface CommentsComponentProps {
    comments: string[];
}

const CommentsComponent = (props: CommentsComponentProps) => {
    const renderComments = () => {
        if (props.comments && props.comments.length !== 0) {
            props.comments.map((comment, id) => {
                return (
                    <>
                        <hr />
                        <p key={id}>{comment}</p>
                        <hr />
                    </>
                );
            });
        } else {
            return <div>no comments</div>;
        }
    };
    return <CommentsContainer>{renderComments()}</CommentsContainer>;
};

const CommentsContainer = styled.div`
    background: #ffffff7a;
    height: 40vh;
    margin: 50px;
    padding: 10px;
    overflow: auto;
`;

export default CommentsComponent;
