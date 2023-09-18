import { Box } from "@mui/material";
import { OneBoardColumn } from "./components/BoardColumns/OneBoardColumn";
import { OneBoardHeader } from "./components/OneBoardHeader";

export default function BoardDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <Box sx={{ display: "grid", gridTemplateRows: "auto 1fr", height: "100%" }}>
      <OneBoardHeader title="Testing" />
      <OneBoardColumn column={{ cards: {}, id: "12", title: "test" }}>
        1
      </OneBoardColumn>
    </Box>
  );
}
