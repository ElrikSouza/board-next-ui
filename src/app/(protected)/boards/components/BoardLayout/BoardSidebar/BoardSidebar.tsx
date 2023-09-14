"use client";
import { useOpenable } from "@/hooks/useDialog";
import { BoardSidebarTransitions } from "./BoardSidebarTransitions";
import { ClosedBoardSidebar } from "./ClosedBoardSidebar";
import { OpenBoardSidebar } from "./OpenBoardSidebar";

export function BoardSidebar() {
  const sidebarState = useOpenable({ defaultState: true });

  return (
    <BoardSidebarTransitions
      open={sidebarState.open}
      closedSidebarSlot={
        <ClosedBoardSidebar onOpen={sidebarState.handleOpen} />
      }
      openSidebarSlot={<OpenBoardSidebar onClose={sidebarState.handleClose} />}
    />
  );
}
