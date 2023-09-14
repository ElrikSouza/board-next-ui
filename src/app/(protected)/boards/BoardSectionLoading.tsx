import { PageSection } from "@/components/building-blocks/PageSection";
import { Skeleton } from "@mui/material";
import { range } from "lodash";
import { BoardGridStyleContainer } from "./components/BoardGrid/BoardGridStyleContainer";

export default function BoardLoading() {
  return (
    <PageSection title="Boards">
      <BoardGridStyleContainer>
        {range(5).map((num) => (
          <Skeleton
            key={num}
            sx={{ aspectRatio: "var(--card-ratio, 1.618)", transform: "none" }}
          />
        ))}
      </BoardGridStyleContainer>
    </PageSection>
  );
}
