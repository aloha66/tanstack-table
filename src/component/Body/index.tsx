import { flexRender } from '@tanstack/react-table';
import { useTableContext, useTableThemeContext } from '../hook';
import { Table_Ele } from '../utils/constant';

function Body() {
  const { table } = useTableContext();
  const { getComponent } = useTableThemeContext();

  const trComponent = getComponent(Table_Ele.Row);
  const tdComponent = getComponent(Table_Ele.Cell);
  const thComponent = getComponent(Table_Ele.ScopeCell);

  return (
    <tbody>
      {table?.getRowModel().rows.map((row) => {
        return (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => {
              return (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
}

export default Body;
