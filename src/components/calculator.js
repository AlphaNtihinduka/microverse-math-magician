import React, { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';
import Linking from './Linking';
import '../css/calculator.css';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const onClick = (event) => {
    const result = calculate(state, event.target.id);
    setState(result);
  };

  return (
    <div>
      <Linking />
      <div className="calculator-main">
        <p className="lets-math">Lets do some Math!</p>
        <div>
          <div className="result">
            <span>{state.total}</span>
            <span>{state.operation}</span>
            <span>{state.next}</span>
          </div>
          <div className="btn-container">
            <Button className="top" onClick={onClick} id="AC" />
            <Button className="top" onClick={onClick} id="+/-" />
            <Button className="top" onClick={onClick} id="%" />
            <Button className="right-btn" onClick={onClick} id="÷" />

            <Button className="top" onClick={onClick} id="7" />
            <Button className="top" onClick={onClick} id="8" />
            <Button className="top" onClick={onClick} id="9" />
            <Button className="right-btn" onClick={onClick} id="x" />

            <Button className="top" onClick={onClick} id="4" />
            <Button className="top" onClick={onClick} id="5" />
            <Button className="top" onClick={onClick} id="6" />
            <Button className="right-btn" onClick={onClick} id="-" />

            <Button className="top" onClick={onClick} id="1" />
            <Button className="top" onClick={onClick} id="2" />
            <Button className="top" onClick={onClick} id="3" />
            <Button className="right-btn" onClick={onClick} id="+" />

            <Button className="top zero-btn" onClick={onClick} id="0" />
            <Button className="top" onClick={onClick} id="." />
            <Button className="right-btn" onClick={onClick} id="=" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
