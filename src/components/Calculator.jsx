"use client"

import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const buttonPress = (label) => {
    if (label === '=') {
      try {
        const tempResult = eval(input)
        if (!(tempResult % 1)) {
          setResult(eval(input));
        } else {
          setResult(eval(input).toFixed(5));
        }
      } catch (error) {
        setResult('Error')
      }
      setInput('')
    } else if (label === 'C') {
      setInput('')
      setResult('')
    } else {
      setInput(input + label)
    }
  }

  const labels = [
    '7', '8', '9', 'C',
    '4', '5', '6', '%',
    '1', '2', '3', '+',
    '', '0', '', '-',
    '', '', '', '/',
    '', '', '', '*',
    '', '', '', '=',
  ]

  return (
    <div className="calculator">
      <h1>Calculadora</h1>

      <div className="display">
        <input type="text" value={input || result} readOnly disabled />
      </div>

      <div className="buttons">
        {labels.map((label, index) => (
          <div key={index} className={`button ${label === '' ? 'empty' : ''}`} onClick={() => buttonPress(label)}>
            {label}
          </div>
        ))}
      </div>

      <style jsx>{`
        .calculator {
          text-align: center;
          max-width: 400px;
          margin: 16px auto;
          border: 2px;
          background-color: #eee;
          padding: 16px;
          color: black;
          border-radius: 16px;
          box-shadow: 0 0 32px teal;
        }
        .display {
          margin: 12px;
        }
        input {
          width: 100%;
          padding: 10px;
          font-size: 1.5rem;
          background-color: #a1a0a1;
          color: black;
          border-radius: 8px;
        }
        .buttons {
          display: grid;
          justify-content: center;
          grid-template-columns: repeat(4, 60px);
          grid-gap: 16px;
        }
        .button {
          width: 50px;
          height: 50px;
          font-size: 1.2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: .4s;
        }
        .button:hover {
          background-color: #ddd;
          transform: scale(1.2);
        }
        .empty {
          background-color: transparent;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default Calculator;
