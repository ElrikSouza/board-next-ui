"use client";
import { Box } from "@mui/material";

import { useOpenable } from "@/hooks/useDialog";
import { useCreateCard } from "../hooks/useCreateCard";
import { useCreateColumn } from "../hooks/useCreateColumn";
import { useOneBoard } from "../hooks/useOneBoard";
import { BoardColumnFormModal } from "./components/BoardColumnForm";
import { BoardColumnFormValues } from "./components/BoardColumnForm/useBoardColumnForm";
import { BoardColumns } from "./components/BoardColumns/BoardColumns";
import { OneBoardEmptyState } from "./components/OneBoardEmptyState";
import { OneBoardHeader } from "./components/OneBoardHeader";

export default function BoardDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  const board = useOneBoard({ boardId: id });
  const showEmptyState = board?.columns?.length === 0;

  const { mutate } = useCreateColumn();
  const handleCreateColumn = (column: BoardColumnFormValues) =>
    mutate({ column, boardId: id });

  const createCard = useCreateCard({ boardId: id });

  const createColumnModal = useOpenable();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        height: "100%",
        gap: "1rem",
      }}
    >
      <BoardColumnFormModal
        onClose={createColumnModal.handleClose}
        open={createColumnModal.open}
        onSubmit={handleCreateColumn}
      />

      <OneBoardHeader title={board?.title ?? "Loading"} />

      {!showEmptyState && (
        <BoardColumns
          columns={board?.columns}
          onCreateColumn={handleCreateColumn}
          onSubmitCard={createCard.mutate}
        />
      )}

      {showEmptyState && (
        <OneBoardEmptyState onCreateColumn={createColumnModal.handleOpen} />
      )}
    </Box>
  );
}
