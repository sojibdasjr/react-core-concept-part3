import React from 'react';
import './Comment.css'

const Comment = ({commentsProps}) => {
    // console.log(commentsProps);
    const {body, name, email, postId} = commentsProps;
    
    return (
        <div className='Box SingleComment_Box'>
            <h3>PostID : <strong>{postId}</strong> Name : {name} </h3>
            <h4>Email : {email}</h4>
            <small>{body}</small>


        </div>
    );
};

export default Comment;