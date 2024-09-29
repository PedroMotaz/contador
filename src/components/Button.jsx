import React from 'react';

const Buttons = ({ onIncrement, onDecrement, onReset }) => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  }

  return (
    <div style={style}>
      <button onClick={onIncrement}>+</button>
      <button onClick={onReset}>↺</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}

export default Buttons;
