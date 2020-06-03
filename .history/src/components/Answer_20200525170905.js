import React from 'react';

const Answer = (props) => {
  return (
    <div>
      <button value={props.letter} className="anwer">
        <span classNAme="letter">{props.letter}. </span>
        {props.answer}
      </button>
    </div>
  );
};

export default Answer;
