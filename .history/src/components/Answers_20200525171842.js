import React, { useState } from 'react';
import Answer from './Answer';

const Answers = (props) => {
  const [state, setstate] = useState();

  return (
    <div>
      <Answer letter="a" answer={props.question.answer_a} />
      <Answer letter="b" answer={props.question.answer_b}  />
      <Answer letter="c" answer={props.question.answer_c}  />
      <Answer letter="d" answer={props.question.answer_d} />

    </div>
  );
};

export default Answers;
