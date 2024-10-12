import { ColumnDef } from '@tanstack/react-table';
import { Column as ConvertColumn } from '../types';
import { renderPreSetDataType } from './preSetDataType';

export function convertColumn<T>(colArr: ConvertColumn<T>[]) {
  function handleHeader(column: ConvertColumn<T>) {
    if (typeof column.header === 'function')
      return {
        id: column.key,
      };
  }

  function handleItem(column: ConvertColumn<T>) {
    const { key, render, columns,type,width, ...rest } = column;

    const newColumn: ColumnDef<T> = {
      accessorKey: '',
      size:width,
      ...rest,
      ...handleHeader(rest),
    };
        if (key) {
      newColumn.accessorKey = key;
    }

    if(type) {
      newColumn.cell = ({ row, getValue }) => {        
        return renderPreSetDataType(type,getValue(), row.original,row.index);
      };
    }

    if (render) {
      newColumn.cell = ({ row, getValue }) => {        
        return render(getValue(), row.original,row.index);
      };
    }

    if (columns) {
      newColumn.columns = convertColumn(columns);
    }

    return newColumn;
  }

  return colArr.map(handleItem);
}
