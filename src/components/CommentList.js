import React from 'react';
import Comment from './Comment';

const CommentList = props => {
  return (
    <div className="comment-list">
      <div className="ui cards">
        {props.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
      </div>
    </div>
  );
};

export default CommentList;
