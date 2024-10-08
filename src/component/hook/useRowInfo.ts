import { useTableContext } from ".";

interface UseRowInfo<RecordType> {
    record:RecordType,recordIndex: number
}

export default function useRowInfo<RecordType>( props:UseRowInfo<RecordType>) {
    const context = useTableContext()
    const {onRow} = context
    const {record,recordIndex} = props

    const rowProps = onRow?.(record, recordIndex);
    

    return {
        ...context,
        rowProps,   
    }


}