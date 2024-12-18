import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import ShopingListing from "./pages/ShopingListing";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;
function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [openAuth, setOpenAuth] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Container>
            <Navbar setOpenAuth={setOpenAuth} openAuth={openAuth}/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Shop" element={<ShopingListing />} />
            </Routes>
            {openAuth && <Authentication openAuth={openAuth} setOpenAuth={setOpenAuth} />}
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
