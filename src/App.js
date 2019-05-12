import React from 'react';
import './App.css';
import CommentsListContainer from "./CommentsListContainer";
import TextContainer from "./TextContainer";

const App = () => {
  return (
    <div className="App">
      <h1>App with comments list</h1>
      <CommentsListContainer />
      <h3>Add new comment</h3>
      <TextContainer />
    </div>
  );
};


export default App;
