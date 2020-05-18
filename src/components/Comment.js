import React, {useRef} from 'react';
import './Comment.css';

const Comment = props => {
  const audioElement = useRef(null);

  const onAudioPlay = () => {
    audioElement.current.play();
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
            src={`http://localhost:8000/${props.comment.id}.mp3`}
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
