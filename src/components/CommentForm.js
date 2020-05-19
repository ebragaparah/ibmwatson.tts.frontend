import React, {useState} from 'react';
import commentsApi from '../apis/comments';

const CommentForm = props => {
    const [content, setContent] = useState('');
    
    const formSubmit = async e => {
      e.preventDefault();
      const response = await commentsApi.post('/comments', {content: content});
      setContent('');
      props.onFormSubmit(response.data);
    };

    const onTextChange = e => {
      setContent(e.target.value);
    };
    
    return (
    <div className="comment-form ui segment">
      <h1 className="ui header">Adicionar comentário</h1>
      <form className="ui form">
        <div className="field">
          <label>Texto</label>
          <textarea
            value={content}
            rows="2"
            onChange={e => onTextChange(e)}>
          </textarea>
        </div>
        <button
          onClick={e => formSubmit(e)}
          className="ui labeled icon button">
          <i className="paper plane icon"></i>
            Adicionar
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
