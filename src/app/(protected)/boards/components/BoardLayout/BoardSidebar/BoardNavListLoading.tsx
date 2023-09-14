import { NavLinkSection } from "@/components/building-blocks/NavLinkSection";
import { Skeleton } from "@mui/material";
import { range } from "lodash";

export function BoardNavListLoading() {
  return (
    <NavLinkSection title="My Boards">
      {range(5).map((num) => (
        <Skeleton key={num} sx={{ transform: "none" }} />
      ))}
    </NavLinkSection>
  );
}
