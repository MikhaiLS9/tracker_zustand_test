import { PropsWithClassNameAndChildren } from "../../types/types";
import cn from "classnames";
import styles from "./button.module.scss";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithClassNameAndChildren {
  appearance: "accent" | "secondary" | "ghost";
  size: "s" | "m" | "l" | "xl" | "none" | "full";
}

export const Button = ({
  children,
  type = "submit",
  className,
}: ButtonProps) => {
  return (
    <button className={cn(styles.button, className)} type={type}>
      {children}
    </button>
  );
};
