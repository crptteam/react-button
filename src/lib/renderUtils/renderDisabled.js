import React from 'react';
import merge from 'lodash/merge';

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

const renderDisabled = (props = {}) => {
  const { onMouseEnter, onMouseLeave } = props;

  const collectedProps = collectProps(props, {
    accessor: 'getDisabledProps',
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
        'Disabled',
        'DisabledComponent',
        'DisabledElementType',
        'DisabledRender',
        'DisabledType',
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

export default renderDisabled;
