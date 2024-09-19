import { RowData } from '@tanstack/react-table';
import TableContext from './context/TableContext';
import { useTable, UseTableOptions } from './hook';
import Table from './Table';
import Header from './Header/Header';
import Body from './Body';
import { useMemo } from 'react';
import { GetComponentProps } from './types';

interface InternalTableProps<TData extends RowData>
  extends UseTableOptions<TData> {
    onRow?: GetComponentProps<TData>;
  }

const InternalTable = <TData extends RowData>(
  props: InternalTableProps<TData>
) => {
  const { data, columns ,onRow} = props;
  const table = useTable({ data, columns });
  // TODO handle flat columns
  const TableContextValue = useMemo(() => ({table,columns,onRow}),[table,onRow])
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
