import HeaderMain from "./components/header/Header";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/log/auth/AuthFrom";
import { DefaultTheme } from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/GlobalStyle";
import A from "./components/log/auth/smt";
import { Flex } from "./components/styles/Flex.styled";

const theme: DefaultTheme = {
  colors: {
    header: "#9fa9a3",
    body: "#c5d5c5",
    footer: "#e3e0cc",
  },
  mobile: "768px",
};


function App() {




  return (
    <ThemeProvider theme={theme}>
      <>
      <HeaderMain />
      <GlobalStyle/>
      <Flex>
        <Routes>
          <Route path="/login"  element={<SignUp />} />
          <Route path="/A"  element={<A />} />
          <Route path="/" element={<SignUp />} />
        </Routes>
        </Flex>
    </>
  </ThemeProvider>
  );
}

export default App;
