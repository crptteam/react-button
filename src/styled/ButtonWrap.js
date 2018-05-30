import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.button`
    js-display: inline-flex;
    display: inline-flex;
    padding: 0;
    outline: 0;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    white-space: nowrap;
    padding-left: ${props => props.paddingLeft};
    padding-right: ${props => props.paddingRight};
    border: ${props => props.border};
    background: ${props => props.background};
    color: ${props => props.color};
    height: ${props => props.height};
    font-family: ${props => props.fontFamily};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    box-sizing: border-box;
    min-width: ${props => props.minWidth};
    cursor: ${props => (props.disabled ? 'not-allowed !important' : props.cursor ? props.cursor : 'pointer')};
    margin-right: ${props => props.marginRight ? props.marginRight + 'px' : 0};
  `;

const ButtonWrap = props => {
  const theme = getThemeAsPlainTextByKeys(
    props.theme || defaultTheme,
    props.disabled ? 'disabled' : 'main',
    props.size || 'normal'
  );


  return <Elem {...theme} {...props} />;
};

export default ButtonWrap;
