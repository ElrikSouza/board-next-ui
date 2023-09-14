import { ChildrenProps } from "@/app/util.types";
import { Box } from "@mui/material";
import { BoardHeader } from "./components/BoardLayout/BoardHeader/BoardHeader";
import { BoardSidebar } from "./components/BoardLayout/BoardSidebar/BoardSidebar";

export default function BoardLayout({ children }: ChildrenProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "column",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <BoardHeader />

      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
        }}
      >
        <BoardSidebar />
        <Box sx={{ flex: "1 1 0" }}>{children}</Box>
      </Box>
    </Box>
  );
}
