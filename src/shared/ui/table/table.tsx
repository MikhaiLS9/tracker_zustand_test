import { PropsWithClassNameAndChildren } from '../../types/types';

import cn from 'classnames'
import styles from './table.module.scss'

  
  export const CustomTable = ({ className, children }: Readonly<PropsWithClassNameAndChildren>) => {
    return (
      <table className={cn(styles.table, className)}>
        <tbody>{children}</tbody>
      </table>
    );
  };
  
  CustomTable.Header = function CustomTableHeader({
    children,
    className,
  }: PropsWithClassNameAndChildren) {
    return (
      <tr className={cn(styles.header, className)}>
        {children}
      </tr>
    );
  };
  
  CustomTable.HeaderCell = function CustomTableHeaderCell({
    children,
    className,
  }: PropsWithClassNameAndChildren) {
    return (
      <th className={cn(styles.headerCell, className)}>
        {children}
      </th>
    );
  };
  
  CustomTable.BodyRow = function CustomTableBodyRow({
    children,
    className,
  }: PropsWithClassNameAndChildren) {
    return (
      <tr className={cn(styles.bodyRow, className)}>
        {children}
      </tr>
    );
  };
  
  CustomTable.BodyCell = function CustomTableBodyCell({
    children,
    className,
  }: PropsWithClassNameAndChildren) {
    return (
      <td className={cn(styles.bodyCell, className)}>
        {children}
      </td>
    );
  };
  
  