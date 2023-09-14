import { NavLinkSection } from "@/components/building-blocks/NavLinkSection";
import { getBoardDetailsURL } from "../../../[id]/path";
import { useBoards } from "../../../hooks/useBoards";
import { BoardNavListEntry } from "./BoardNavListEntry";

export function BoardNavList() {
  const boards = useBoards();
  return (
    <NavLinkSection title="My boards">
      {boards?.map(({ title, id }) => (
        <BoardNavListEntry
          key={id}
          title={title}
          linkTo={getBoardDetailsURL(id)}
        />
      ))}
    </NavLinkSection>
  );
}
