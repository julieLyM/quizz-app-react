import React, { useState } from 'react';
import Answer from './Answer';

const Answers = (props) => {
  const [state, setstate] = useState();

  return (
    <div>
      <Answer letter="a" answer={props.question.} />
      <Answer letter="b" answer="Library" />
      <Answer letter="c" answer="Other" />
      <Answer letter="d" answer="Other" />

    </div>
  );
};

export default Answers;
