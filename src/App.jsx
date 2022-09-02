import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './App.css'

const App = () => {
  const [preState, setPreState] = useState('')
  const [curState, setCurState] = useState('')
  const [input, setInput] = useState('0')
  const [operator, setOperator] = useState(null)
  const [total, setTotal] = useState(false)

  const inputNum = e => {
    if (curState.includes('.') && e.target.innerText === '.') return 

    if (total) {
      setPreState('')
    }

    curState ? setCurState(pre => pre + e.target.innerText) : setCurState(e.target.innerText)
    setTotal(false)

  }

  useEffect(() => {
    setInput(curState)
  }, [curState])

  useEffect(() => {
    setInput('0')
  },[])

  const operatorType = e => {
    
  }

  const equals = e => {
    
  }

  const minusPlus = e => {
    
  }

  const reset = e => {
    
  }

  const persent = e => {
    
  }

  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen">{input}</div>
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
