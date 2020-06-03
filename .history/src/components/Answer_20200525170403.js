import React from 'react';

const Answer = (props) => {
  return (
    <div>
      <button value={props.letter}>
          <span>{props}</span>
      </button>
    </div>
  );
};

export default Answer;
