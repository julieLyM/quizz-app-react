import React, { useState } from 'react';
import Answer from './Answer';

const Answers = (props) => {
  const [state, setstate] = useState();

  return (
    <div>
      <Answer
        letter="a"
        answer={props.question.answer_a}
        handleClick={props.handleClick}
        selected={props.currentAnswer === 'a'}
      />
      <Answer
        letter="b"
        answer={props.question.answer_b}
        handleClick={props.handleClick}

        selected={props.currentAnswer === 'b'}
      />
      <Answer
        letter="c"
        answer={props.question.answer_c}
        selected={props.currentAnswer === 'c'}
      />
      <Answer
        letter="d"
        answer={props.question.answer_d}
        selected={props.currentAnswer === 'd'}
      />
    </div>
  );
};

export default Answers;
