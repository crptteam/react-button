import { isValidChildren } from '@crpt/react-utils';

const render = (props = {}) => {
  const {
    renderNormal,
    renderActive,
    renderDisabled,
    renderHovered,
    ...passProps
  } = props;

  let result = null;

  if ((passProps.isActive && !passProps.isDisabled) && typeof renderActive === 'function') {
    result = renderActive(passProps);
  } else if ((passProps.isHovered && !passProps.isDisabled) && typeof renderHovered === 'function') {
    result = renderHovered(passProps);
  } else if (passProps.isDisabled && typeof renderDisabled === 'function') {
    result = renderDisabled(passProps);
  } else if (typeof renderNormal === 'function') {
    result = renderNormal(passProps);
  }

  return isValidChildren(result)
    ? result
    : null;
};

export default render;
