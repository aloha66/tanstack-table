import { ReactNode, useMemo } from 'react';
import { validateValue } from '../utils/value';
import { ColumnType } from '../types';
import React from 'react';

interface UseCellRender<RecordType> {
  record: RecordType;
  children?: ReactNode;
  renderIndex: number;
  render?: ColumnType<RecordType>['render'];
}

function isRenderCell(data: React.ReactNode) {
  return (
    data &&
    typeof data === 'object' &&
    !Array.isArray(data) &&
    !React.isValidElement(data)
  );
}

export default function useCellRender<RecordType>(
  props: UseCellRender<RecordType>
) {
  const { record, render, renderIndex, children } = props;
  return useMemo(() => {

    if (validateValue(children)) {
      return [children];
    }
  
    let returnChildNode = record;
  
    if (render) {
      const value = record;
      const renderData = render(value, record, renderIndex);
  
      returnChildNode = isRenderCell(renderData)
        ? renderData.children
        : renderData;
    }
  
    return [returnChildNode];
  },[ record, render, renderIndex, children ])
 
}
