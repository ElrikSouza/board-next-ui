"use client";

import { ChevronRight } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { forwardRef } from "react";

export interface ClosedBoardSidebarProps {
  onOpen: () => void;
}

export const ClosedBoardSidebar = forwardRef(
  ({ onOpen }: ClosedBoardSidebarProps, ref) => {
    return (
      <Box
        ref={ref}
        sx={{
          "--width": "1.5rem",
          height: "100%",
          backgroundColor: "black",
          position: "relative",
          flex: "0 0 var(--width)",
          width: "var(--width)",
        }}
      >
        <IconButton
          onClick={onOpen}
          sx={{
            background: "blue",
            position: "absolute",
            top: "1rem",
            left: "calc(var(--width) / 4)",
            aspectRatio: 1,
            "& svg": {
              width: "1rem",
              height: "1rem",
            },
          }}
        >
          <ChevronRight />
        </IconButton>
      </Box>
    );
  }
);

ClosedBoardSidebar.displayName = "ClosedBoardSidebar";
