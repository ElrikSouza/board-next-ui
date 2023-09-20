import { Box } from "@mui/material";
import { TBoardCard } from "../../../boards.types";

export interface BoardCardProps {
  card: TBoardCard;
}

export function BoardCard({ card }: BoardCardProps) {
  return (
    <Box
      sx={{
        background: "red",
        padding: "1rem",
        width: "100%",
        aspectRatio: "1.618",
      }}
    >
      {card.title}
    </Box>
  );
}
