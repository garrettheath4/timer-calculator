import React, { Component } from 'react';
import * as classNames from 'classnames';
import moment from 'moment';
import './Calculator.css';

class Calculator extends Component {
  render() {
    const {
      answer,
    } = this.state;

    return (
      <form className="calculator">
        <div>
          <label className="delayLabel" htmlFor="delay">Delay:</label>
          <input
              autoFocus
              tabIndex={1}
              type="text"
              onChange={this.handleChange.bind(this, 'delay')}
              className="delayLabel"
              id="delay"
              placeholder="minutes"
          />
        </div>
        <div>
          <button
              id="submit"
              tabIndex={2}
              type="submit"
              onClick={this.submit.bind(this)}
              className={classNames("btn", "btn-primary", "calculate")}
          >
            Calculate
          </button>
        </div>
        {answer && <div className="answer">{answer}</div>}
      </form>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      delay: "0",
      answer: undefined,
    };
  }

  handleChange(propName, event: React.FormEvent<HTMLInputElement>) {
    const input = event.target;

    this.setState({
      ...this.state,
      [propName]: input.value
    });
  }

  submit(e) {
    e.preventDefault();

    const minutesToAdd = parseInt(this.state.delay);
    const calculatedTime = moment().add(minutesToAdd, 'minutes').format("h:mm a");

    this.setState({
      ...this.state,
      answer: calculatedTime,
    });
  }
}

export default Calculator;

/* vim: set ts=2 sw=2 sta sts=2 sr et ai: */
