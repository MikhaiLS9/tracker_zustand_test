import { PropsWithChildren } from "react";
import styles from "./layout.module.scss";
export const DefaultLayouts = ({ children }: Readonly<PropsWithChildren>) => {
  return <div className={styles.layout}>{children}</div>;
};
