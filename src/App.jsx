import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";

const theme = {
  colors: {
    primary: "#1877f2",
  },
  media: {
    mobile: "380px",
  }
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Home />
    </ThemeProvider>
  )
  
};

export default App;