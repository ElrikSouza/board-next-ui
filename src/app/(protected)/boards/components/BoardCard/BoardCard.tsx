"use client";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { getBoardDetailsURL } from "../../[id]/path";

export interface BoardCardProps {
  title: string;
  id: string;
}

export function BoardCard({ title, id }: BoardCardProps) {
  const router = useRouter();

  const navToDetails = () => router.push(getBoardDetailsURL(id));

  return (
    <Box
      sx={{
        background: "url(https://picsum.photos/500/400)",
        backgroundColor: "#000",
        aspectRatio: "var(--card-ratio, 1.618)",
        padding: "1.5rem",
        objectFit: "cover",
        borderRadius: "8px",
      }}
      onClick={navToDetails}
    >
      {title}
    </Box>
  );
}
