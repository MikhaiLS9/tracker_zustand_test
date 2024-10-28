import { PropsWithChildren } from "react";
import styles from './layout.module.scss'
export const BaseLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return <div className={styles.layout}>{children}</div>;
};
