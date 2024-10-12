import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import {
  keepPreviousData,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

import './index.css';

import {
  PaginationState,
  SortingState,
} from '@tanstack/react-table';

export interface Column<T> {
  key?: string;
  header?: string;
  columns?: Column<T>[];
  render?: (val: T[keyof T], row: T) => void;
}

import { fetchData } from './fetchData';
import { col2 } from './data/col';
import TableThemeContext from './component/context/TableThemeContext';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import Table from './Table';


const queryClient = new QueryClient();

function useTableState() {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const [sorting, setSorting] = React.useState<SortingState>([])

  const [rowSelection, setRowSelection] = React.useState({})

  return {
    pagination, setPagination,
    sorting, setSorting,
    rowSelection, setRowSelection
  }
}

function App2() {

  const tableState = useTableState()
  const { pagination, sorting, rowSelection } = tableState

  const enableRowSelection = (row) => {
    return row.firstName.includes('d')
  }

  const dataQuery = useQuery({
    queryKey: ['data', pagination, sorting],
    queryFn: () => fetchData(pagination),
    placeholderData: keepPreviousData, // don't have 0 rows flash while changing pages/loading next page
  });

  return <Table columns={col2} dataQuery={dataQuery} {...tableState} enableRowSelection={enableRowSelection} />;
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TableThemeContext.Provider value={{
        Table: 'table',
        Cell: TableCell,
        Row: TableRow,
        ScopeCell: TableCell,
        Selection: Checkbox,
      }}>
        <App2 />
      </TableThemeContext.Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
