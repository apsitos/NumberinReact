import React from 'react';

const Reset = ({startover}) => {

  return (
    <div>
      <button onClick={ () => startover() }>Reset</button>
    </div>
  );
};

export default Reset;
