import { ReactNode } from "react";

export type ChildrenProps = {
  children: ReactNode;
};

export type BaseDialogProps = {
  open: boolean;
  onClose: () => void;
};
