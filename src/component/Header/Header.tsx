import { flexRender } from '@tanstack/react-table';
import { useTableContext, useTableThemeContext } from '../hook';
import { Table_Ele } from '../utils/constant';

const Header = () => {
  const { table } = useTableContext();
  const { getComponent } = useTableThemeContext();
  const RowComponent = getComponent(Table_Ele.Row);
  const tdComponent = getComponent(Table_Ele.Cell);
  const ThComponent = getComponent(Table_Ele.ScopeCell);

  return (
    <thead>
      {table?.getHeaderGroups().map((headerGroup) => (
        <RowComponent key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <ThComponent key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder ? null : (
                  // <div {...{onClick: header.column.getToggleSortingHandler()}}>
                      <div {...{onClick: (e)=>{
                    header.column.getToggleSortingHandler()!(e)
                    table.setPageIndex(0)
                    console.log(222);
                    
                    }}}> 
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                     {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                            false: ' 🔃',
                          }[header.column.getIsSorted() as string] ?? null}
                  </div>
                )}
              </ThComponent>
            );
          })}
        </RowComponent>
      ))}
    </thead>
  );
};

export default Header;
