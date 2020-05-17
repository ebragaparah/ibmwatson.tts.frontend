import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import './App.css';

const App = () => {
    return (
          <div className="ui container app">
            <div className="ui two column grid">
              <div className="column">
                <CommentForm />
              </div>
              <div className="column">
                <CommentList />
              </div>
            </div>
          </div>
    );
};

export default App;
