import React, { Component } from 'react';
import './calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  render() {
    return (
      <>
        {/* start sectionone */}
        <section className="sectionone" id="sectionone">
          <div className="sectionone__wrapper">
            <div className="formcontrol">
              <input type="text" name="name" placeholder="Enter the calc" />
            </div>
            <div className="btns">
              <button type="button">AC</button>
              <button type="button">+/-</button>
              <button type="button">%</button>
              <button type="button">÷</button>
              <button type="button">7</button>
              <button type="button">8</button>
              <button type="button">9</button>
              <button type="button">*</button>
              <button type="button">4</button>
              <button type="button">5</button>
              <button type="button">6</button>
              <button type="button">-</button>
              <button type="button">1</button>
              <button type="button">2</button>
              <button type="button">3</button>
              <button type="button">+</button>
              <button type="button">0</button>
              <button type="button">.</button>
              <button type="button">=</button>
            </div>
          </div>
        </section>
        {/* end sectionone */}
      </>
    );
  }
}
