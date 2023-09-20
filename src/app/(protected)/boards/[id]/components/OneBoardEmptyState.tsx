import { CentralizeInPageContainer } from "@/components/building-blocks/CentralizeInPage";
import { EmptyStateMessage } from "@/components/building-blocks/EmptyStateMessage";
import { Task } from "@mui/icons-material";
import { Button } from "@mui/material";

export interface OneBoardEmptyStateProps {
  onCreateColumn: () => void;
}

export function OneBoardEmptyState({
  onCreateColumn,
}: OneBoardEmptyStateProps) {
  return (
    <CentralizeInPageContainer>
      <EmptyStateMessage
        icon={<Task />}
        title="There are no columns in this board"
        body="Boards are organized in columns, that are organized in cards. You can add as many columns and cards as you want!"
        callToAction={
          <Button onClick={onCreateColumn} variant="contained">
            Create Card Column
          </Button>
        }
      />
    </CentralizeInPageContainer>
  );
}
