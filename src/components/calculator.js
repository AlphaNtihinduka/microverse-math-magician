import React from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick = (event) => {
    const result = calculate(this.state, event.target.id);
    this.setState(result);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div>
        <div className="result">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </div>
        <div className="btn-container">
          <Button className="top" onClick={this.onClick} id="AC" />
          <Button className="top" onClick={this.onClick} id="+/-" />
          <Button className="top" onClick={this.onClick} id="%" />
          <Button className="right-btn" onClick={this.onClick} id="÷" />

          <Button className="top" onClick={this.onClick} id="7" />
          <Button className="top" onClick={this.onClick} id="8" />
          <Button className="top" onClick={this.onClick} id="9" />
          <Button className="right-btn" onClick={this.onClick} id="x" />

          <Button className="top" onClick={this.onClick} id="4" />
          <Button className="top" onClick={this.onClick} id="5" />
          <Button className="top" onClick={this.onClick} id="6" />
          <Button className="right-btn" onClick={this.onClick} id="-" />

          <Button className="top" onClick={this.onClick} id="1" />
          <Button className="top" onClick={this.onClick} id="2" />
          <Button className="top" onClick={this.onClick} id="3" />
          <Button className="right-btn" onClick={this.onClick} id="+" />

          <Button className="top zero-btn" onClick={this.onClick} id="0" />
          <Button className="top" onClick={this.onClick} id="." />
          <Button className="right-btn" onClick={this.onClick} id="=" />
        </div>
      </div>
    );
  }
}
export default Calculator;
