import React from 'react';

const Answer = (props) => {
  return (
    <div>
      <button value={props.letter}>
          <span>{props.letter}</span>
      </button>
    </div>
  );
};

export default Answer;
