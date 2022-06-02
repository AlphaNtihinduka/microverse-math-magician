import React from 'react';
import Button from './Button';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="btn-container">
        <button type="button" className="top" onClick={onclick} id="AC">AC</button>
        <button type="button" className="top" onClick={onclick} id="+/-">+/-</button>
        <button type="button" className="top" onClick={onclick} id="%">%</button>
        <button type="button" className="right-btn" onClick={onclick} id="/">/</button>

        <button type="button" className="top" onClick={onclick} id="7">7</button>
        <button type="button" className="top" onClick={onclick} id="8">8</button>
        <button type="button" className="top" onClick={onclick} id="9">9</button>
        <button type="button" className="right-btn" onClick={onclick} id="x">X</button>

        <button type="button" className="top" onClick={onclick} id="4">4</button>
        <button type="button" className="top" onClick={onclick} id="5">5</button>
        <button type="button" className="top" onClick={onclick} id="6">6</button>
        <button type="button" className="right-btn" onClick={onclick} id="-">-</button>

        <button type="button" className="top" onClick={onclick} id="1">1</button>
        <button type="button" className="top" onClick={onclick} id="2">2</button>
        <button type="button" className="top" onClick={onclick} id="3">3</button>
        <button type="button" className="right-btn" onClick={onclick} id="+">+</button>

        <button type="button" className="top zero-btn" onClick={onclick} id="0">0</button>
        <button type="button" className="top" onClick={onclick} id=".">.</button>
        <button type="button" className="right-btn" onClick={onclick} id="=">=</button>
      </div>
    );
  }
}
export default Calculator;
