import React, {useState, useRef} from 'react';
import './Comment.css';
import commentsApi from '../apis/comments';

const Comment = props => {
  const audioElement = useRef(null);
  const [audioURL, setAudioURL] = useState('');

  const onAudioPlay = () => {
  commentsApi.get(`/comments/${props.comment.id}`)
    .then(() => {
      setAudioURL(`http://localhost:8000/${props.comment.id}.mp3`);
      audioElement.current.play();
    })
    .catch(err => console.log('Something went wrong in the audio file creation'));
  };

  return (
    <div className="card">
      <div className="content">
        <div className="header">{`#${props.comment.id}`}</div>
        <div className="description">
          {props.comment.content}
        </div>
        <div className="voice">
          <audio
            autoPlay=""
            id={props.comment.id}
            className="audio"
            controls=""
            type="audio/mpeg"
            src={audioURL}
            ref={audioElement}>
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
      <div onClick={() => onAudioPlay()}
        className="ui bottom attached button">
        <i className="assistive listening systems icon"></i>
        Escutar
      </div>
    </div>
  );
};

export default Comment;
