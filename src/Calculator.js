import React, { Component } from 'react';
import * as classNames from 'classnames';

class Calculator extends Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="delay">Delay</label>
          <input
              autoFocus
              tabIndex={1}
              type="text"
              onChange={this.handleChange.bind(this, 'delay')}
              className="form-control"
              id="delay"
              placeholder="Username" />
        </div>
        <div>
          <label htmlFor="submit">Calculate</label>
          <button
              id="submit"
              tabIndex={2}
              type="submit"
              onClick={this.submit.bind(this)}
              className={classNames("btn", "btn-primary")}>Login
          </button>
        </div>
      </form>
    );
  }

  handleChange(propName, event: React.FormEvent<HTMLInputElement>) {
    const input = event.target as HTMLInputElement;

    this.setState({ [propName]: input.value });
  }

  submit(e) {
    e.preventDefault();

    const loginRequest = {...this.state};

    this.props.login(loginRequest);
  }
}

export default Calculator;
