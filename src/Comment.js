import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Comment.css";

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment}) => 
  <li className="Comment">
    {text}
    <span className="Votes"> votes: {votes}</span>
    <div className="Comment-buttons">
      <button className="thumbUp" onClick={() => thumbUpComment(id)}><FontAwesomeIcon icon="thumbs-up" /></button>
      <button className="thumbDown" onClick={() => thumbDownComment(id)}><FontAwesomeIcon icon="thumbs-down" /></button>
      <button className="trash" onClick={() => removeComment(id)}><FontAwesomeIcon icon="trash" /></button>
    </div>
  </li>;

export default Comment;
