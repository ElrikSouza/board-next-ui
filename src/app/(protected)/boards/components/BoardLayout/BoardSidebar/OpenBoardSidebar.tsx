"use client";

import { ChevronLeft } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { Suspense, forwardRef } from "react";
import { BoardNavList } from "./BoardNavList";
import { BoardNavListLoading } from "./BoardNavListLoading";

export interface OpenBoardSidebarProps {
  onClose: () => void;
}

export const OpenBoardSidebar = forwardRef(
  ({ onClose }: OpenBoardSidebarProps, ref) => {
    return (
      <Box
        ref={ref}
        sx={{
          display: "flex",
          flexFlow: "column",
          flex: "0 0 var(--side-size, 300px)",
          padding: "1rem",
          backgroundColor: "grey",
          width: "300px",
          height: "100%",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton onClick={onClose}>
            <ChevronLeft />
          </IconButton>
        </Box>

        <Suspense fallback={<BoardNavListLoading />}>
          <BoardNavList />
        </Suspense>
      </Box>
    );
  }
);

OpenBoardSidebar.displayName = "OpenBoardSidebar";
