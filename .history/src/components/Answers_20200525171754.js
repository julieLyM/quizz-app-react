import React, { useState } from 'react';
import Answer from './Answer';

const Answers = (props) => {
  const [state, setstate] = useState();

  return (
    <div>
      <Answer letter="a" answer="Framework" />
      <Answer letter="b" answer="Library" />
      <Answer letter="C" answer="Other" />
      <Answer letter="D" answer="Other" />

    </div>
  );
};

export default Answers;
