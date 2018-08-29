import React from 'react';

import merge from 'lodash/merge';

import {
  getChildren,
  getComponentProps,
  getElementType,
  isValidChildren,
} from '@crpt/react-utils';

import {
  ButtonDefaultProps,
  ButtonPropTypes,
} from './Button.types';

class Button extends React.PureComponent {
  static displayName = 'Button';

  static propTypes = ButtonPropTypes;

  static defaultProps = ButtonDefaultProps;

  state = {
    isActive: this.props.isActive,
    isHovered: this.props.isHovered,
    isDisabled: this.props.isDisabled,
  };

  onMouseLeave = () => {
    const { onMouseOver, isHovered } = this.props;
    if (onMouseOver) onMouseOver();
    else this.setState({ isHovered: isHovered || false });
  };

  onMouseEnter = () => {
    const { onMouseEnter, isHovered } = this.props;
    if (onMouseEnter) onMouseEnter();
    else this.setState({ isHovered: isHovered || true });
  };

  render() {
    const componentProps = merge(getComponentProps(Button, this.props), this.state);

    const ElementType = getElementType(componentProps, {
      getDefault: () => Button,
    });

    const children = getChildren(componentProps, {
      getDefault: (ownProps) => {
        const { render } = ownProps;

        const button = typeof render === 'function'
          ? render(ownProps)
          : null;

        return isValidChildren(button)
          ? button
          : null;
      },
    });

    return componentProps.render({
      as: ElementType,
      ...componentProps,
      children,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
    });
  }
}

export default Button;
