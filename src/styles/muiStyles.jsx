import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          paddingLeft: "12px",
        },
      },
    },
  },
});

export default theme


