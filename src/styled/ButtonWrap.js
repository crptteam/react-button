import React from "react";
import styled from "styled-components";

import { getThemeAsPlainTextByKeys, innerMerge } from "../utils";
import defaultTheme from "../theme/defaultTheme";

const Elem = styled.button`
  js-display: inline-flex;
  display: inline-flex;
  padding: 0;
  outline: 0;
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${props => props.borderTopLeftRadius};
  border-top-right-radius: ${props => props.borderTopRightRadius};
  border-bottom-left-radius: ${props => props.borderBottomLeftRadius};
  border-bottom-right-radius: ${props => props.borderBottomRightRadius};
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
  box-shadow: ${props => props.boxShadow};
  min-width: ${props => props.minWidth};
  cursor: ${props =>
    props.disabled
      ? "not-allowed !important"
      : props.cursor ? props.cursor : "pointer"};
  margin-right: ${props => (props.marginRight ? props.marginRight + "px" : 0)};
  :hover {
    color: ${props => props.hoverColor};
    background: ${props => props.hoverBackground};
    box-shadow: ${props => props.hoverBoxShadow};
    border-top-left-radius: ${props => props.hoverBorderTopLeftRadius};
    border-top-right-radius: ${props => props.hoverBorderTopRightRadius};
    border-bottom-left-radius: ${props => props.hoverBorderBottomLeftRadius};
    border-bottom-right-radius: ${props => props.hoverBorderBottomRightRadius};
    padding-left: ${props => props.hoverPaddingLeft};
    padding-right: ${props => props.hoverPaddingRight};
    border: ${props => props.hoverBorder};
  }
`;

const ButtonWrap = props => {
  const merged = innerMerge(
    {},
    defaultTheme.Button,
    props.theme && props.theme.Button ? props.theme.Button : {}
  );

  const theme = getThemeAsPlainTextByKeys(
    merged,
    props.disabled ? "disabled" : "main",
    props.size || "normal"
  );

  return <Elem {...theme} {...props} />;
};

export default ButtonWrap;
