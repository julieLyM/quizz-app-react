import React from 'react';

const Answer = (props) => {
  let classes = ['answer'];
  if (props.selected) {
    classes.push('selected');
  }

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
