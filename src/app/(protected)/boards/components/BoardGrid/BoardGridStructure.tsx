"use client";

import { Button } from "@mui/material";
import { ReactNode } from "react";
import { BoardGridStyleContainer } from "./BoardGridStyleContainer";

export interface BoardGridStructureProps {
  children: ReactNode;
  onClickCreateBtn: () => void;
}

export function BoardGridStructure({
  children,
  onClickCreateBtn,
}: BoardGridStructureProps) {
  return (
    <BoardGridStyleContainer>
      {children}
      <Button
        onClick={onClickCreateBtn}
        variant="contained"
        sx={{ aspectRatio: "var(--card-ratio, 1.618)", borderRadius: "8px" }}
      >
        Create Board
      </Button>
    </BoardGridStyleContainer>
  );
}
