import { appColors } from "@/app/colors";
import { MoreVert } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { TBoardColumn } from "../../../boards.types";
import { BoardCard } from "../BoardCard/BoardCard";
import { CardToggleForm } from "../CardForm/CardToggleForm";
import { CardFormValues } from "../CardForm/useCardForm";

export interface OneBoardColumnProps {
  column: TBoardColumn;
  onClickMenu?: () => void;
  onSubmitCard: (params: { card: CardFormValues; columnId: string }) => void;
}

export function OneBoardColumn({
  column,
  onClickMenu,
  onSubmitCard,
}: OneBoardColumnProps) {
  const handleSubmitCard = (card: CardFormValues) =>
    onSubmitCard({ card, columnId: column.id });

  return (
    <Box
      sx={{
        display: "flex",
        borderRadius: "12px",
        backgroundColor: appColors.columnBg,
        color: "#fff",
        padding: "1.5rem",
        flexFlow: "column",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="titleSmall" sx={{ color: appColors.textBright }}>
          {column.title}
        </Typography>

        <IconButton onClick={onClickMenu} sx={{ color: appColors.textBright }}>
          <MoreVert />
        </IconButton>
      </Box>

      <Box
        sx={{
          background: appColors.cardContainerBg,
          height: "100%",
          borderRadius: ".5rem",
          padding: ".5rem",
        }}
      >
        {column.cards?.map((card) => (
          <BoardCard card={card} key={card.id} />
        ))}
      </Box>

      <CardToggleForm onSubmitCard={handleSubmitCard} />
    </Box>
  );
}
