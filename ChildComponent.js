import React from 'react';

const ChildComponent = ({ incrementCounter }) => {
  return (
    <div>
      <button onClick={incrementCounter}>Increment Counter</button>
    </div>
  );
};

export default ChildComponent;
