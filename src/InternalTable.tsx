import { PaginationState, RowData } from '@tanstack/react-table';
import TableContext from './component/context/TableContext';
import { useTable, UseTableOptions } from './component/hook';
import Table from './component/Table';
import Header from './component/Header/Header';
import Body from './component/Body';
import { useMemo } from 'react';
import { GetComponentProps } from './component/types';

interface InternalTableProps<TData extends RowData>{
  onRow?: GetComponentProps<TData>;
  table:any
  columns: any;
}

/**
 * 
 * 內部logic,layout
 */
const InternalTable = <TData extends RowData>(
  props: InternalTableProps<TData>
) => {
  const TableContextValue = useMemo(() => (props), [props])
  return (
    <TableContext.Provider value={TableContextValue}>
      <Table>
        <Header></Header>
        <Body></Body>
      </Table>
    </TableContext.Provider>
  );
};

export default InternalTable;
