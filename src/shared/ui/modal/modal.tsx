import { ReactNode, MouseEventHandler } from "react";
import { createPortal } from "react-dom";

import cn from "classnames";
import styles from "./modal.module.scss";
import { PropsWithClassNameAndChildren } from "../../types/types";

type UiModalProps = {
  width?: "md" | "full";
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
};

export const UiModal = ({
  //   width = "md",
  className,
  children,
  isOpen = false,
  onClose,
}: UiModalProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const inModal = (e.target as HTMLDivElement).closest("[data-id=modal]");
    if (inModal) return;
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  const modal = (
    <div onClick={handleClick} className={styles.overlay}>
      <div data-id="modal" className={cn(styles.modal, className)}>
        {children}
      </div>
    </div>
  );

  return createPortal(modal, document.getElementById("modals")!);
};

UiModal.Header = function UiModalHeader({
  children,
  className,
}: PropsWithClassNameAndChildren) {
  return <div className={cn(styles.header, className)}>{children}</div>;
};

UiModal.Body = function UiModalBody({
  children,
  className,
}: PropsWithClassNameAndChildren) {
  return <div className={cn(styles.body, className)}>{children}</div>;
};

UiModal.Footer = function UiModalFooter({
  children,
  className,
}: PropsWithClassNameAndChildren) {
  return <div className={cn(styles.footer, className)}>{children}</div>;
};
