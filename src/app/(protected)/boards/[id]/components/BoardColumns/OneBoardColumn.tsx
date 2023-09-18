import { ChildrenProps } from "@/app/util.types";
import { MoreVert } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { BoardColumn } from "../../../boards.types";

export interface OneBoardColumnProps extends ChildrenProps {
  column: BoardColumn;
  onClickMenu?: () => void;
}

export function OneBoardColumn({
  column,
  onClickMenu,
  children,
}: OneBoardColumnProps) {
  return (
    <Box
      sx={{
        borderRadius: "12px",
        backgroundColor: "#000",
        color: "#fff",
        padding: "1rem",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="captionMedium">{column.title}</Typography>

        <IconButton onClick={onClickMenu}>
          <MoreVert />
        </IconButton>
      </Box>

      <Box
        sx={{
          background: "grey",
          height: "100%",
          borderRadius: ".5rem",
          padding: ".5rem",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
