import { createContext } from 'react';
import { CustomizeComponent } from '../types';

export interface TableComponents {
  Table: CustomizeComponent;
  Cell: CustomizeComponent;
  Row: CustomizeComponent;
  ScopeCell: CustomizeComponent;
}

const TableThemeContext = createContext<TableComponents>({
  Table: 'table',
  Cell: 'td',
  Row: 'tr',
  ScopeCell: 'th',
});

export default TableThemeContext;
