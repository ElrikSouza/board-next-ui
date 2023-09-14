"use client";

import { Slide } from "@mui/material";
import { TransitionGroup } from "react-transition-group";

export interface BoardSidebarTransitionsProps {
  open: boolean;
  openSidebarSlot: JSX.Element;
  closedSidebarSlot: JSX.Element;
}

export function BoardSidebarTransitions({
  open,
  openSidebarSlot,
  closedSidebarSlot,
}: BoardSidebarTransitionsProps) {
  return (
    <TransitionGroup>
      {!open && <Slide direction="right">{closedSidebarSlot}</Slide>}
      {open && <Slide direction="right">{openSidebarSlot}</Slide>}
    </TransitionGroup>
  );
}
