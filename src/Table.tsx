import { PaginationState, RowData } from "@tanstack/react-table";
import InternalTable from "./InternalTable";
import { UseTableOptions, useTable } from "./component/hook";
import { GetComponentProps } from "./component/types";
import { UseQueryResult } from "@tanstack/react-query";
import { Pagination } from "./component/Pagination";
import { Dispatch } from "react";
import useSelection from "./component/hook/useSelection";
import { convertColumn } from "./component/utils/convert";


export interface TableProps<TData extends RowData>
  extends UseTableOptions<TData> {
  onRow?: GetComponentProps<TData>;
  pagination: PaginationState
  setPagination: Dispatch<PaginationState>
  dataQuery: UseQueryResult<{
    rows: TData[];
    pageCount: number;
    rowCount: number;
  }, Error>
}

/**
 * 
 * 處理不同類型表格,分頁,virtual table
 */
export default function Table<TData extends RowData>(props: TableProps<TData>) {
  console.count('render')
  const { columns: _columns, pagination, dataQuery, enableRowSelection, ...rest } = props;
  const selection = useSelection()
  const columns = enableRowSelection ? [selection, ...convertColumn(_columns)] : convertColumn(_columns)
  const table = useTable({ ...props, columns });
  return <><InternalTable table={table} columns={columns} {...rest} />
    <Pagination table={table} dataQuery={dataQuery} pagination={pagination} />
  </>
}