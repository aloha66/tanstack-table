import { Table } from '@tanstack/react-table';
import { createContext } from 'react';

export interface TableContextProps<TData> {
  table: Table<TData> | null;
}

const TableContextProps = createContext<TableContextProps>({
  table: null,
});

export default TableContextProps;
