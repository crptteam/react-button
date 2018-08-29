import React from 'react';
import { render } from 'react-dom';

import { Button } from '../../src';
import { filledTheme } from '../../src/theme';


class Counter extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}


class Welcome extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div>{children}</div>
    );
  }
}


class Demo extends React.Component {
  state = {
    counter: 0,
  };

  // interval = null;
  //
  // componentDidMount() {
  //   this.interval = setInterval(
  //     () => this.setState(({ counter }) => ({ counter: counter + 1 })),
  //     1000,
  //   );
  // }
  //
  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  render() {
    const { counter } = this.state;
    return (
      <Button
        theme={filledTheme}
      >
        <Welcome>Hello world</Welcome>
        <Counter>{counter}</Counter>
      </Button>
    );
  }
}

render(
  <Demo />,
  document.querySelector('#demo')
);
