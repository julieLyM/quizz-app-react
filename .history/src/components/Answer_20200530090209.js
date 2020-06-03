import React from 'react';

const Answer = (props) => {
  let classes = []
  return (
    <div>
      <button
        value={props.letter}
        className="answer"
        onClick={props.handleClick}
      >
        <span classNAme="letter">{props.letter}. </span>
        {props.answer}
      </button>
    </div>
  );
};

export default Answer;
