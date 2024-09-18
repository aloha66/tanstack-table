import { ReactNode } from 'react';
import { useTableThemeContext } from './hook';
import { Table_Ele } from './utils/constant';

export default function Table({ children }: { children: ReactNode }) {
  const { getComponent } = useTableThemeContext();

  const TableComponent = getComponent(Table_Ele.Table);

  return <TableComponent>{children}</TableComponent>;
}
