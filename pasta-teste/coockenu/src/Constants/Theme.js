import { createTheme } from "@material-ui/core/styles";
import { neutralColor, primaryColor } from "./Colors";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white",
    },
    secondary: {
      main: neutralColor,
    },
  },
});

export default theme;
