import { flexRender } from "@tanstack/react-table";
import Cell from "../Cell";
import useRowInfo from "../hook/useRowInfo";
import { CustomizeComponent } from "../types";

export interface BodyRowProps<RecordType> {
  record: RecordType;
  index: number;
  renderIndex: number;
  className?: string;
  style?: React.CSSProperties;
  rowComponent: CustomizeComponent;
  cellComponent: CustomizeComponent;
  scopeCellComponent: CustomizeComponent;
  indent?: number;
  rowKey: React.Key;
}

function BodyRow<RecordType extends { children?: readonly RecordType[] }>(
  props: BodyRowProps<RecordType>,
) {
  const { rowInstance,record, index, rowComponent: RowComponent,
    cellComponent,
    scopeCellComponent, renderIndex } = props
  const { rowProps, columns } = useRowInfo({ record, recordIndex: index });

  const baseRowNode = (<RowComponent {...rowProps}>
    {rowInstance.getVisibleCells().map((cell, colIndex) => {
      const { render } = column;

      return  flexRender(cell.column.columnDef.cell, cell.getContext())

      // return <Cell render={render} component={column.rowScope ? scopeCellComponent : cellComponent} record={record} renderIndex={renderIndex} />
    })}
  </RowComponent>)


  return <>
    {baseRowNode}
  </>
}

export default BodyRow