import { RowData } from '@tanstack/react-table';
import TableContext from './context/TableContext';
import { useTable, UseTableOptions } from './hook';
import Table from './Table';
import Header from './Header/Header';
import Body from './Body';

interface InternalTableProps<TData extends RowData>
  extends UseTableOptions<TData> {}

const InternalTable = <TData extends RowData>(
  props: InternalTableProps<TData>
) => {
  const { data, columns } = props;
  const table = useTable({ data, columns });
  return (
    <TableContext.Provider value={{ table }}>
      <Table>
        <Header></Header>
        <Body></Body>
      </Table>
    </TableContext.Provider>
  );
};

export default InternalTable;
