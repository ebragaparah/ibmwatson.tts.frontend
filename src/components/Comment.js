import React from 'react';

const Comment = props => {
    return (
            <div className="card">
              <div className="content">
              <div className="header">{`#${props.comment.id}`}</div>
                <div className="description">
                  {props.comment.content}
                </div>
              </div>
              <div className="ui bottom attached button">
                <i className="assistive listening systems icon"></i>
                  Escutar
              </div>
            </div>
            
    );
};

export default Comment;
