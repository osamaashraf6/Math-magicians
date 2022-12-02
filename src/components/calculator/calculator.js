import React, { Component } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    if (!e.target.name) return;
    const { next, total, operation } = calculate(this.state, e.target.name);
    if (next === null && total === null) {
      this.setState({ next, total: '0', operation });
    } else {
      this.setState({ next, total, operation });
    }
  }

  render() {
    const { next, total } = this.state;
    const btns = [
      'AC',
      '+/-',
      '%',
      '÷',
      '7',
      '8',
      '9',
      '*',
      '4',
      '5',
      '6',
      '-',
      '1',
      '2',
      '3',
      '+',
      '0',
      '.',
      '=',
    ];
    return (
      <>
        {/* start sectiononee */}
        <section className="sectionone" id="sectionone">
          <div className="sectionone__wrapper">
            <div className="formcontrol">
              {next ? (<input type="text" name="name" value={next} />) : (<input type="text" name="name" value={total} />)}

            </div>
            <div className="btns">
              {btns.map((btn) => (
                <button type="button" name={btn} key={btn} onClick={(e) => this.handleClick(e)}>{btn}</button>
              ))}
            </div>
          </div>
        </section>
        {/* end sectionone */}
      </>
    );
  }
}
