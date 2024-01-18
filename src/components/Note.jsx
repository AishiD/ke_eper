import React from "react";

function Note(props) {
  return (
    <div>
      <div className="bg-white rounded-md shadow-md p-5 w-60 m-4 float-left">
        <h1 className="title text-3xl">{props.title}</h1>
        <p className="content">{props.content}</p>
      </div>
    </div>
  );
}

export default Note;
