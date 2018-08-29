import PropTypes from 'prop-types';

import { customPropTypes } from '@crpt/react-utils';

import {
  render,
  renderNormal,
  renderActive,
  renderDisabled,
  renderHovered,
  renderContent,
} from '../../lib';

import { ButtonWrapper } from '../../styled';

export const ButtonPropTypes = {
  as: customPropTypes.as,

  isActive: PropTypes.bool,
  isHovered: PropTypes.bool,
  isDisabled: PropTypes.bool,

  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,

  children: customPropTypes.children,

  getProps: PropTypes.func,
  getNormalProps: PropTypes.func,
  getActiveProps: PropTypes.func,
  getDisabledProps: PropTypes.func,
  getHoveredProps: PropTypes.func,

  render: PropTypes.func,
  renderNormal: PropTypes.func,
  renderActive: PropTypes.func,
  renderDisabled: PropTypes.func,
  renderHovered: PropTypes.func,
  renderContent: PropTypes.func,

  className: PropTypes.string,
  style: PropTypes.shape({}),
  theme: PropTypes.shape({}).isRequired,
};

export const ButtonDefaultProps = {
  as: ButtonWrapper,

  render,
  renderNormal,
  renderActive,
  renderDisabled,
  renderHovered,
  renderContent,

  theme: {},
};
