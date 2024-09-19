import { Table } from '@tanstack/react-table';
import { createContext } from 'react';
import { GetComponentProps } from '../types';

export interface TableContextProps<TData> {
  table: Table<TData> | null;
  onRow?: GetComponentProps<TData>;
  columns: any;
}

const TableContext = createContext<TableContextProps>({
  table: null,
});

export default TableContext;
