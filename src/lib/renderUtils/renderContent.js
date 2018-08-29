import React from 'react';
import map from 'lodash/map';

import {
  collectProps,
  collectPropsUtils,
  getChildren,
  getElementType,
} from '@crpt/react-utils';

import { Content } from '../../styled';

const {
  processPropsWith,
} = collectPropsUtils;

const renderContent = (props = {}) => {
  const collectedProps = collectProps(props, {
    accessor: 'getContentProps',
    collection: [
      processPropsWith,
    ],
  });

  const ElementType = getElementType(collectedProps, {
    getDefault: () => getElementType(props, {
      getDefault: () => Content,
      shorthand: [
        'Content',
        'ContentComponent',
        'ContentElementType',
        'ContentRender',
        'ContentType',
      ],
      updateProps: false,
    }),
  });

  const children = getChildren(collectedProps, {
    getDefault: () => {
      return map(props.children, (child, key) => {
        if (React.isValidElement(child)) return React.cloneElement(child, { key });
        return child;
      });
    },
  });

  return (
    <ElementType
      {...collectedProps}
    >
      {children}
    </ElementType>
  );
};

export default renderContent;
