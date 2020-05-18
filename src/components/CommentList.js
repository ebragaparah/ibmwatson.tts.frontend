import React, {useState, useEffect} from 'react';
import Comment from './Comment';
import commentsApi from '../apis/comments';

const CommentList = props => {
  const [comments, setComments] = useState([]);
    
  const fetchComments = async () => {
    const response = await commentsApi.get('/comments');
    props.onFetchComments(response);
    setComments(response.data);
  };

  useEffect(() => {
    fetchComments();
  }, [props.comments]);
    
  return (
    <div className="comment-list">
      <div className="ui cards">
        {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
      </div>
    </div>
  );
};

export default CommentList;
