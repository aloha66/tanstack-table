import { useContext, useMemo } from 'react';

import {
  getCoreRowModel,
  RowData,
  useReactTable,
} from '@tanstack/react-table';
import TableContext, { TableContextProps } from '../context/TableContext';
import TableThemeContext, {
  TableComponents,
} from '../context/TableThemeContext';
import { UseQueryResult } from '@tanstack/react-query';

export function useTableThemeContext() {
  const context = useContext(TableThemeContext);

  function getComponent<T extends keyof TableComponents>(key: T) {
    return context[key];
  }

  return {
    getComponent,
  };
}

export function useTableContext<T>() {
  const context = useContext<TableContextProps<T>>(TableContext);

  const { table } = context

  function getRows() {
    return table!.getRowModel().rows
  }

  return { ...context, getRows }
}

export type UseTableOptions<TData> = {
  // data: TableOptions<TData>['data'];
  columns: any;
  dataQuery: UseQueryResult<{
    rows: TData[];
    pageCount: number;
    rowCount: number;
  }, Error>
};


export function useTable<TData extends RowData>(
  options: UseTableOptions<TData>
) {
  const { columns, dataQuery, rowKey, pagination, setPagination, sorting, setSorting, enableRowSelection, rowSelection, setRowSelection } = options;
  const defaultData = useMemo(() => [], []);
  const data = dataQuery.data?.rows ?? defaultData

  const table = useReactTable({
    debugTable: true,
    rowCount: dataQuery.data?.rowCount, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
      sorting,
      rowSelection
    },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    enableRowSelection: enableRowSelection ? e => enableRowSelection(e.original) : false,
    onRowSelectionChange: setRowSelection,
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    // getPaginationRowModel: getPaginationRowModel(), //not needed for server-side pagination
    manualPagination: true, //turn off client-side pagination
    manualSorting: true, //use pre-sorted row model instead of sorted row model
    isMultiSortEvent: () => true,
    getRowId: (row, idx) => {
      return rowKey ? row[rowKey] : '' + pagination.pageIndex + idx
    },
  });

  return table;
}
