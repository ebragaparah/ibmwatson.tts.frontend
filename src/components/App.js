import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const App = () => {
    return (
            <div className="ui container app">
            <CommentForm />
            <CommentList />
            </div>
    );
};

export default App;
