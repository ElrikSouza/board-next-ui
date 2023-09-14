"use client";

import { ChildrenProps } from "@/app/util.types";
import { Box, Typography } from "@mui/material";

export interface PageSectionProps extends ChildrenProps {
  title: string;
}

export function PageSection({ title, children }: PageSectionProps) {
  return (
    <Box sx={{ display: "flex", flexFlow: "column", gap: "1rem" }}>
      <Typography variant="titleMedium">{title}</Typography>
      {children}
    </Box>
  );
}
