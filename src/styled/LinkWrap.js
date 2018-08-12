import React, { Component } from "react";
import styled from "styled-components";

import { getThemeAsPlainTextByKeys, innerMerge } from "../utils";
import defaultTheme from "../theme/defaultTheme";

const Elem = styled.a`
  -webkit-appearance: none !important;
  js-display: inline-flex;
  display: inline-flex;
  padding: 0;
  outline: 0;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 2px;
  white-space: nowrap;
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  border-top-left-radius: ${props => props.borderTopLeftRadius};
  border-top-right-radius: ${props => props.borderTopRightRadius};
  border-bottom-left-radius: ${props => props.borderBottomLeftRadius};
  border-bottom-right-radius: ${props => props.borderBottomRightRadius};
  border: ${props => props.border};
  background: ${props => props.background};
  color: ${props => props.color};
  height: ${props => props.height};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  box-sizing: border-box;
  min-width: ${props => props.minWidth};
  cursor: ${props => (props.disabled ? "not-allowed !important" : "pointer")};
  margin-right: ${props => (props.marginRight ? props.marginRight + "px" : 0)};
  box-shadow: ${props => props.boxShadow};
  :hover {
    color: ${props => props.color};
  }
`;

const LinkWrap = props => {
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

export default LinkWrap;
