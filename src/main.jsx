import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./styles/theme";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>
);
