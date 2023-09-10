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
        background: "linear-gradient(179deg, #4056CE 16.49%, #511C45 99.63%)",
      }}
    >
      {children}
    </Box>
  );
}
