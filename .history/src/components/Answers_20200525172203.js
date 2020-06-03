import React, { useState } from 'react';
import Answer from './Answer';

const Answers = (props) => {
  const [state, setstate] = useState();

  return (
    <div>
      <Answer
        letter="a"
        answer={props.question.answer_a}
        selected={props.currentAnswer === 'a'}
      />
      <Answer
        letter="b"
        answer={props.question.answer_b}
        selected={props.currentAnswer === 'a'}
      />
      <Answer
        letter="c"
        answer={props.question.answer_c}
        selected={props.currentAnswer === 'a'}
      />
      <Answer
        letter="d"
        answer={props.question.answer_d}
        selected={props.currentAnswer === 'a'}
      />
    </div>
  );
};

export default Answers;
