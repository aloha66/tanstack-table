import { useTableContext, useTableThemeContext } from '../hook';
import { Table_Ele } from '../utils/constant';
import BodyRow from './BodyRow';

function Body() {
  const { getRows } = useTableContext();
  const { getComponent } = useTableThemeContext();

  const trComponent = getComponent(Table_Ele.Row);
  const tdComponent = getComponent(Table_Ele.Cell);
  const thComponent = getComponent(Table_Ele.ScopeCell);

  return (
    <tbody>
      {getRows().map((row) => <BodyRow row={row} rowComponent={trComponent} cellComponent={tdComponent} key={row.id} scopeCellComponent={thComponent}/>)}
    </tbody>
  );
}

export default Body;
