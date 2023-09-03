import { Box } from "@mui/material";
import { ChildrenProps } from "../util.types";

export default function AuthLayout({ children }: ChildrenProps) {
  return (
    <Box
      sx={{
        display: "grid",
        height: "100%",
        width: "100%",
        placeItems: "center",
        background:
          "linear-gradient(90deg, hsla(329, 57%, 53%, 1) 0%, hsla(357, 55%, 46%, 1) 100%);",
      }}
    >
      {children}
    </Box>
  );
}
