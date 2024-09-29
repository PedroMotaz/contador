import React from 'react';

const Screen = ({ value }) => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  }
  return (
    <div style={style}>
      <h1>{value}</h1>
    </div>
  );
}



export default Screen;
