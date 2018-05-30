import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ButtonWrap from '../styled/ButtonWrap';
import LinkWrap from '../styled/LinkWrap';

import { SIZES } from '../constants';
import { defaultTheme } from '../theme/';

class Button extends Component {
  buttonElem;

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.props.onClick && this.props.onClick();
  }

  render() {
    const { theme, type, size, link, disabled, ...otherProps } = this.props;

    const Wrap = link ? LinkWrap : ButtonWrap;

    return (
      <Wrap
        innerRef={el => (this.buttonElem = el)}
        theme={theme}
        type={type || 'button'}
        onClick={this.onClick}
        disabled={disabled}
        size={size}
        {...otherProps}
      />
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  link: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(SIZES))
};

Button.defaultProps = {
  theme: defaultTheme,
  size: SIZES.normal,
  link: false
};

Button.displayName = 'Button';

export default Button;
