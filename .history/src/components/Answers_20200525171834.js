import React, { useState } from 'react';
import Answer from './Answer';

const Answers = (props) => {
  const [state, setstate] = useState();

  return (
    <div>
      <Answer letter="a" answer={props.question.answer_a} />
      <Answer letter="b" answer={props.question.answer_a}  />
      <Answer letter="c" answer={props.question.answer_a}  />
      <Answer letter="d" answer={props.question.answer_a} />

    </div>
  );
};

export default Answers;
