import { createContext } from 'react';
import { CustomizeComponent } from '../types';
import { Default_Table_Ele } from '../utils/constant';

export interface TableComponents {
  Table: CustomizeComponent;
  Cell: CustomizeComponent;
  Row: CustomizeComponent;
  ScopeCell: CustomizeComponent;
  Selection:  CustomizeComponent;

}

const TableThemeContext = createContext<TableComponents>(Default_Table_Ele);

export default TableThemeContext;
