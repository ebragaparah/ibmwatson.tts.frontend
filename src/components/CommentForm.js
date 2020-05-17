import React from 'react';

const CommentForm = () => {
    const postComment = e => {
      e.preventDefault();

    };

    
    return (
        <div className="comment-form ui segment">
          <h1 className="ui header">Adicionar comentário</h1>    
          <form className="ui form">
            <div className="field">
              <label>Texto</label>
              <textarea rows="2"></textarea>
            </div>
            <button
              onClick={e => postComment(e)}
              className="ui labeled icon button">
              <i className="paper plane icon"></i>
              Adicionar
            </button>
          </form>
        </div>
    );
};

export default CommentForm;
