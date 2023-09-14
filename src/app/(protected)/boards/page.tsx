import { Box } from "@mui/material";
import { Suspense } from "react";
import BoardLoading from "./BoardSectionLoading";
import { BoardGrid } from "./components/BoardGrid/BoardGrid";

export default function BoardsPage() {
  return (
    <Box sx={{ padding: "1.5rem", height: "100%" }}>
      <Suspense fallback={<BoardLoading />}>
        <BoardGrid />
      </Suspense>
    </Box>
  );
}
