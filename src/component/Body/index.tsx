import { flexRender } from '@tanstack/react-table';
import { useTableContext, useTableThemeContext } from '../hook';
import { Table_Ele } from '../utils/constant';
import BodyRow from './BodyRow';

function Body() {
  const { table } = useTableContext();
  const { getComponent } = useTableThemeContext();

  const trComponent = getComponent(Table_Ele.Row);
  const tdComponent = getComponent(Table_Ele.Cell);
  const thComponent = getComponent(Table_Ele.ScopeCell);

  const RowComponent = trComponent
  const CellComponent = tdComponent

  return (
    <tbody>
      {table?.getRowModel().rows.map((row,renderIndex) => {
        // return (
        //   <tr key={row.id}>
        //     {row.getVisibleCells().map((cell) => {
        //       return (
        //         <td key={cell.id}>
        //           {flexRender(cell.column.columnDef.cell, cell.getContext())}
        //         </td>
        //       );
        //     })}
        //   </tr>
        // );
 
        

             return (
          <RowComponent key={row.id}>
            {row.getVisibleCells().map((cell) => {
              return (
                <CellComponent key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </CellComponent>
              );
            })}
          </RowComponent>
        );
      })}
    </tbody>
  );
}

export default Body;
