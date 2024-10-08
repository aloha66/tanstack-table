import { Cell as TanstackCell, flexRender } from '@tanstack/react-table';
import { ColumnType, CustomizeComponent, DefaultRecordType } from '../types';

export interface CellProps<RecordType extends DefaultRecordType> {
  cell:TanstackCell<any,any>
  component: CustomizeComponent;
  children?: React.ReactNode;
  record: RecordType;
  additionalProps?: React.TdHTMLAttributes<HTMLTableCellElement>;
}

function Cell<RecordType extends DefaultRecordType>(
  props: CellProps<RecordType>
) {
  const {
    component: Component,
    additionalProps = {},
    cell,
    
  } = props;

  return <Component {...additionalProps}>

    {   flexRender(cell.column.columnDef.cell, cell.getContext())}
  
    </Component>;
}

export default Cell;
