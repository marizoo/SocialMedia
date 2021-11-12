import { ThemeProvider } from "styled-components";
// import Home from "./pages/Home";
import Profile from "./pages/Profile";

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
    <Profile />
    </ThemeProvider>
  )
  
};

export default App;