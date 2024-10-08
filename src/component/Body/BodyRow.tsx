import { Row } from "@tanstack/react-table";
import Cell from "../Cell";
import useRowInfo from "../hook/useRowInfo";
import { CustomizeComponent } from "../types";

export interface BodyRowProps<RecordType> {
  row: Row<any>;
  // renderIndex: number;
  className?: string;
  style?: React.CSSProperties;
  rowComponent: CustomizeComponent;
  cellComponent: CustomizeComponent;
  scopeCellComponent: CustomizeComponent;
  indent?: number;
  // rowKey: React.Key;
}

function BodyRow<RecordType extends { children?: readonly RecordType[] }>(
  props: BodyRowProps<RecordType>,
) {
  const { rowComponent: RowComponent, row,
    cellComponent,
    scopeCellComponent, } = props

  const record = row.original
  const recordIndex = row.index

  const { rowProps, columns } = useRowInfo({ record, recordIndex });


  const baseRowNode = (<RowComponent {...rowProps}>
    {row.getVisibleCells().map((cell, colIndex) => {
      return <Cell cell={cell} key={cell.id}
        component={columns[colIndex].rowScope ? scopeCellComponent : cellComponent}
        record={record} />
    })}
  </RowComponent>)


  return <>
    {baseRowNode}
  </>
}

export default BodyRow