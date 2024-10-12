import { Cell as TanstackCell, flexRender } from '@tanstack/react-table';
import { CustomizeComponent, DefaultRecordType } from '../types';

export interface CellProps<RecordType extends DefaultRecordType> {
  cell: TanstackCell<any, any>
  component: CustomizeComponent;
  children?: React.ReactNode;
  record: RecordType;
  width: number
  additionalProps?: React.TdHTMLAttributes<HTMLTableCellElement>;
}

function Cell<RecordType extends DefaultRecordType>(
  props: CellProps<RecordType>
) {
  const {
    component: Component,
    additionalProps = {},
    cell,
    width

  } = props;

  const style = cell.column.columnDef.size && cell.column.columnDef.id !== 'select' ? { width: `${width}px`,maxWidth:`${width}px` } : {}

  return <Component {...additionalProps} style={style}>

    {flexRender(cell.column.columnDef.cell, cell.getContext())}

  </Component>;
}

export default Cell;
