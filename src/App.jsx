import { ThemeProvider } from "styled-components";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Home from "./pages/Home";
import Profile from "./pages/Profile";

const theme = {
  colors: {
    primary: "#1877f2",
    secondary: "#f0f2f5",
    logo: "palevioletred",
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