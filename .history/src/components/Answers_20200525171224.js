import React, { useState } from 'react';
import Answer from './Answer';
const Answers = (props) => {
  const [state, setstate] = useState();
  return (
    <div>
      <Answer letter="A" answer="Framework" />
      <Answer letter="B" answer="Library" />
      <Answer letter="C" answer="Other" />
    </div>
  );
};

export default Answers;
