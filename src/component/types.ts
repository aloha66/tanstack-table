import { ReactNode } from 'react';

export interface Column<T> {
  key?: string;
  header?: string;
  columns?: Column<T>[];
  render?: (val: T[keyof T], row: T) => void;
}

type Component<P> =
  | React.ComponentType<P>
  | React.ForwardRefExoticComponent<P>
  | React.FC<P>
  | keyof React.ReactHTML;

export type CustomizeComponent = Component<any>;

export type DefaultRecordType = Record<string, any>;

export interface ColumnType<RecordType> {
  render?: (value: any, record: RecordType, index: number) => ReactNode;
}