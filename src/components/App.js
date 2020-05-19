import React, {useState, useEffect} from 'react';

import commentsApi from '../apis/comments';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import '../styles/App.css';

const App = () => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const response = await commentsApi.get('/comments');
    setComments(response.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

    const onSubmit = comment => setComments([comment, ...comments]);
  
  return (
    <div className="ui container app">
      <div className="ui two column grid">
        <div className="column">
          <CommentForm onFormSubmit={onSubmit} />
        </div>
        <div className="column">
          <CommentList comments={comments} />
        </div>
      </div>
    </div>
  );
};

export default App;
