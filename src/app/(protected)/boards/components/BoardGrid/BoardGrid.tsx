"use client";

import { PageSection } from "@/components/building-blocks/PageSection";
import { useOpenable } from "@/hooks/useDialog";
import { useBoards } from "../../hooks/useBoards";
import { BoardCard } from "../BoardCard";
import { BoardDialogForm } from "../BoardDialogForm";
import { BoardGridStructure } from "./BoardGridStructure";

export function BoardGrid() {
  const boards = useBoards();
  const formDialog = useOpenable();

  return (
    <>
      <BoardDialogForm
        onClose={formDialog.handleClose}
        open={formDialog.open}
        key={String(formDialog.open)}
      />

      <PageSection title="Boards">
        <BoardGridStructure onClickCreateBtn={formDialog.handleOpen}>
          {boards?.map((board) => (
            <BoardCard title={board.title} id={board.id} key={board.id} />
          ))}
        </BoardGridStructure>
      </PageSection>
    </>
  );
}
