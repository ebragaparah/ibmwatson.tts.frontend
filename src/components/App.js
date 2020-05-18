import React, {useState} from 'react';

import CommentForm from './CommentForm';
import CommentList from './CommentList';
import './App.css';

const App = () => {
  const [comments, setComments] = useState([]);
  const onFetchComments = comments => setComments(comments);

  return (
    <div className="ui container app">
      <div className="ui two column grid">
        <div className="column">
          <CommentForm />
        </div>
        <div className="column">
          <CommentList comments={comments} onFetchComments={onFetchComments} />
        </div>
      </div>
    </div>
  );
};

export default App;
