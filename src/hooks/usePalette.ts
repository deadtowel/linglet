import { useTheme } from "@mui/material";

export const usePalette = () => {

  const theme = useTheme();

  return {
    primary: theme.palette.primary.dark,
    secondary: theme.palette.secondary.main,
    white: theme.palette.common.white,
  };
}

export default usePalette;