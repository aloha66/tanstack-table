import { ColumnDef } from "@tanstack/react-table";
import { useTableContext, useTableThemeContext } from ".";
import { Table_Ele } from "../utils/constant";
import { HTMLProps, useEffect, useRef } from "react";

function IndeterminateCheckbox({
    indeterminate,
    className = '',
    ...rest
  }: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
    const { getComponent } = useTableThemeContext();
    const SelectionComponent = getComponent(Table_Ele.Selection);
    const ref = useRef<HTMLInputElement>(null!)
  
    useEffect(() => {
      if (typeof indeterminate === 'boolean') {
        ref.current.indeterminate = !rest.checked && indeterminate
      }
    }, [ref, indeterminate])
  
    return (
      <SelectionComponent
        type="checkbox"
        ref={ref}
        className={className + ' cursor-pointer'}
        {...rest}
      />
    )
  }

export default function useSelection() {
    // const { table } = useTableContext();


    const selectionColumn:ColumnDef<any> = {
        id: 'select',
        header: ({ table }) => (
          <IndeterminateCheckbox type="checkbox"
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <div className="px-1">
            <IndeterminateCheckbox type="checkbox"
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      }
    
      return selectionColumn
}