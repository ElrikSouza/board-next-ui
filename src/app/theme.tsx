import { createTheme } from "@mui/material";
import { appColors } from "./colors";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    titleMedium: React.CSSProperties;
    titleSmall: React.CSSProperties;
    captionMedium: React.CSSProperties;
    subtitleMedium: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    titleMedium?: React.CSSProperties;
    titleSmall?: React.CSSProperties;
    captionMedium?: React.CSSProperties;
    subtitleMedium?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    titleMedium: true;
    titleSmall: true;
    captionMedium: true;
    subtitleMedium: true;
  }
}

export const appTheme = createTheme({
  typography: {
    allVariants: {
      color: appColors.text,
      textTransform: "none",
    },
    titleMedium: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    titleSmall: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    button: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    captionMedium: {
      fontSize: "0.75rem",
      fontWeight: 600,
    },
    subtitleMedium: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          fontWeight: 600,
          textTransform: "none",
          padding: ".5rem 1rem",
          letterSpacing: "unset",
        },
        contained: {
          borderRadius: ".25rem",
        },
        outlined: {
          borderRadius: ".25rem",
        },
        containedPrimary: {
          background: appColors.primary,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          ".MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
        },
      },
    },
  },
});
