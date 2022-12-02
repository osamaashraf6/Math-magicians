import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

const Calculator = () => {
  const [data, setData] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    if (!e.target.name) return;
    const { next, total, operation } = calculate(data, e.target.name);
    if (next === null && total === null) {
      setData({ next, total: '0', operation });
    } else {
      setData({ next, total, operation });
    }
  };
  const { next, total } = data;
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
              <button type="button" name={btn} key={btn} onClick={(e) => handleClick(e)}>{btn}</button>
            ))}
          </div>
        </div>
      </section>
      {/* end sectionone */}
    </>
  );
};
export default Calculator;
