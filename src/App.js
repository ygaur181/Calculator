import React from 'react'
import { useState } from 'react'

function App() {
  const [calc, updateCalc] = useState("");
  const ops = ['/', '*', '-', '+', '.']
  const newCalc = value =>{
    if((ops.includes(value) && calc === "") || (ops.includes(value) && ops.includes(calc.slice(-1)))){
      return;
    }

    updateCalc(calc + value);
  }

  const calculate = () =>{
    let a = "return ";
    if(!ops.includes(calc.slice[-1])){
      updateCalc(Function(a + calc)().toString());
    }
  }

  const numButton = () =>{
    const numlist = [];
    for(let i=1; i<10; i++){ 
      numlist.push(
        <button onClick={() => newCalc(i.toString())}>{i}</button>
      )
    }
    return numlist;
  }
  return (
    <>
      <div className="calculator">
        <div className="display">
          <span> { calc } </span>
        </div>
        <div className="number">
          <div className="operator">
            <button onClick={() => newCalc("/")}>/</button>
            <button onClick={() => newCalc("*")}>*</button>
            <button onClick={() => newCalc("-")}>-</button>
            <button onClick={() => newCalc("+")}>+</button>
            <button onClick={() => updateCalc("")}>DEL</button>
          </div>
          <div className="operand">
            {numButton()}
            <button onClick={() => newCalc("0")}>0</button>
            <button onClick={() => newCalc(".")}>.</button>

            <button onClick={() => calculate()}>=</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App