import { ColumnDef } from '@tanstack/react-table';
import { Column as ConvertColumn } from '../types';

export function convertColumn<T>(colArr: ConvertColumn<T>[]) {
  function handleHeader(column: ConvertColumn<T>) {
    if (typeof column.header === 'function')
      return {
        id: column.key,
      };
  }

  function handleItem(column: ConvertColumn<T>) {
    const { key, render, columns, ...rest } = column;

    const newColumn: ColumnDef<T> = {
      accessorKey: '',
      ...rest,
      ...handleHeader(rest),
    };
    if (key) {
      newColumn.accessorKey = key;
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
