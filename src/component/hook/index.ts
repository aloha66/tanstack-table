import { useContext } from 'react';

import {
  getCoreRowModel,
  RowData,
  TableOptions,
  useReactTable,
} from '@tanstack/react-table';
import { convertColumn } from '../utils/convert';
import TableContext, { TableContextProps } from '../context/TableContext';
import TableThemeContext, {
  TableComponents,
} from '../context/TableThemeContext';

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

  return {
    table: context.table,
  };
}

export type UseTableOptions<TData> = {
  data: TableOptions<TData>['data'];
  columns: any;
};

export function useTable<TData extends RowData>(
  options: UseTableOptions<TData>
) {
  const { data, columns } = options;
  const table = useReactTable({
    columns: convertColumn(columns),
    data,
    getCoreRowModel: getCoreRowModel(),
    // getPaginationRowModel: getPaginationRowModel(), //not needed for server-side pagination
    manualPagination: true, //turn off client-side pagination
    // rowCount: dataQuery.data?.rowCount, //pass in the total row count so the table knows how many pages there are (pageCount calculated internally if not provided)
    // pageCount: dataQuery.data?.pageCount, //alternatively directly pass in pageCount instead of rowCount
  });

  return table;
}
