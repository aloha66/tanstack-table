import { ColumnType, CustomizeComponent, DefaultRecordType } from '../types';
import useCellRender from './useCellRender';

export interface CellProps<RecordType extends DefaultRecordType> {
  render?: ColumnType<RecordType>['render'];
  component?: CustomizeComponent;
  children?: React.ReactNode;
  record: RecordType;
  renderIndex: number;
  additionalProps?: React.TdHTMLAttributes<HTMLTableCellElement>;
}

function Cell<RecordType extends DefaultRecordType>(
  props: CellProps<RecordType>
) {
  const {
    component: Component,
    additionalProps = {},
    children,
    render,
    renderIndex,
    record,
  } = props;

  const [childNode] = useCellRender({
    record,
    renderIndex,
    children,
    render,
  });

  let mergedChildNode = childNode;

  return <Component {...additionalProps}>{mergedChildNode}</Component>;
}

export default Cell;
