import { useTheme } from "@mui/material";

export const usePalette = () => {

  const theme = useTheme();

  return {
    primary: theme.palette.primary.dark,
    secondary: theme.palette.secondary.light,
    white: theme.palette.common.white,
  };
}