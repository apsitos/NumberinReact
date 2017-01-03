import React from 'react';

const Clear = ({ erase }) => {
  return (
    <div>
      <button onClick= {() => erase() }>Clear</button>
    </div>
  );
};

export default Clear;
