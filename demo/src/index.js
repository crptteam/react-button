import React, { Component } from "react";
import { render } from "react-dom";
import { ThemeProvider, withTheme } from "styled-components";

import { Button, themes } from "../../src/";

const WButton = withTheme(Button);

const Pure = props => <div>123123312</div>;

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>Button</h1>
        <ThemeProvider theme={themes.filledTheme}>
          <div>
            <WButton>
              <Pure />
            </WButton>
            <WButton theme={themes.defaultTheme}>Press me</WButton>
            <WButton>Press me</WButton>
            <WButton>Press me</WButton>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
