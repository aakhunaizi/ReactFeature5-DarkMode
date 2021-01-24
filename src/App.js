// Styling
import { GlobalStyle, ThemeButton } from "./styles";

// Components
import CookieList from "./components/ProductList";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

const theme = {
  light: {
    description: "light",
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    description: "dark",
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

const ToggleCurrentTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(theme.light);
  if (currentTheme === theme.light) setCurrentTheme(theme.dark);
  else setCurrentTheme(theme.light);
};
function App() {
  return (
    <ThemeProvider theme={light.theme}>
      <GlobalStyle />
      <ThemeButton onClick={() => ToggleCurrentTheme}>
        {theme.description}
      </ThemeButton>
      <Home />
      <CookieList />
    </ThemeProvider>
  );
}

export default App;
