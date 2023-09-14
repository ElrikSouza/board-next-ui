import { useCallback, useState } from "react";

export function useOpenable({ defaultState } = { defaultState: false }) {
  const [open, setOpen] = useState(defaultState);

  const handleClose = useCallback(() => setOpen(false), []);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleToggle = useCallback(() => setOpen((prev) => !prev), []);

  return {
    open,
    handleClose,
    handleOpen,
    handleToggle,
  };
}
