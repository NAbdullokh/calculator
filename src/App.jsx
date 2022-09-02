import React from "react";
import { useState } from "react";

const App = () => {
  const [preState, setPreState] = useState('')
  const [curState, setCurState] = useState('')
  const [input, setInput] = useState('0')
  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen"></div>
        <div className="btn light-gray" onClick={reset}>AC</div>
        <div className="btn light-gray" onClick={persent}>%</div>
        <div className="btn light-gray" onClick={minusPlus}>+/-</div>
        <div className="btn orange" onClick={operatorType}>/</div>
        <div className="btn" onClick={inputNum}>7</div>
        <div className="btn" onClick={inputNum}>8</div>
        <div className="btn" onClick={inputNum}>9</div>
        <div className="btn orange" onClick={operatorType}>*</div>
        <div className="btn" onClick={inputNum}>4</div>
        <div className="btn" onClick={inputNum}>5</div>
        <div className="btn" onClick={inputNum}>6</div>
        <div className="btn orange" onClick={operatorType}>+</div>
        <div className="btn" onClick={inputNum}>1</div>
        <div className="btn" onClick={inputNum}>2</div>
        <div className="btn" onClick={inputNum}>3</div>
        <div className="btn orange" onClick={operatorType}>-</div>
        <div className="btn" onClick={inputNum}>0</div>
        <div className="btn" onClick={inputNum}>.</div>
        <div className="btn" onClick={equals}>=</div>
      </div>
    </div>
  );
};

export default App;
