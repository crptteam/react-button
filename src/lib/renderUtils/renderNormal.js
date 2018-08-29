import React from 'react';

import {
  collectProps,
  collectPropsUtils,
  getChildren,
  getElementType,
  isValidChildren,
} from '@crpt/react-utils';

import { ButtonWrapper } from '../../styled';

const {
  processPropsWith,
} = collectPropsUtils;

const renderNormal = (props = {}) => {
  const { onMouseEnter, onMouseLeave } = props;

  const collectedProps = collectProps(props, {
    accessor: 'getNormalProps',
    collection: [
      processPropsWith,
    ],
    initial: {
      onMouseEnter,
      onMouseLeave,
    },
  });

  const ElementType = getElementType(collectedProps, {
    getDefault: () => getElementType(props, {
      getDefault: () => ButtonWrapper,
      shorthand: [
        'Normal',
        'NormalComponent',
        'NormalElementType',
        'NormalRender',
        'NormalType',
      ],
      updateProps: false,
    }),
  });

  const children = getChildren(collectedProps, {
    getDefault: () => {
      const { renderContent } = props;
      const c = typeof renderContent === 'function'
        ? renderContent(props)
        : null;

      return isValidChildren(c)
        ? c
        : null;
    },
  });

  return (
    <ElementType
      {...collectedProps}
      key="button"
    >
      {children}
    </ElementType>
  );
};

export default renderNormal;
