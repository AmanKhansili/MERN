import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import ShopingListing from "./pages/ShopingListing";
import Favourite from "./pages/Favourite";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import { useSelector } from "react-redux";
import ToastMessage from "./components/ToastMessage";

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
  const { currentUser } = useSelector((state) => state.user);
  const { open, message, severity } = useSelector((state) => state.user);
  const [theme, setTheme] = useState(lightTheme);
  const [openAuth, setOpenAuth] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Container>
            <Navbar
              setOpenAuth={setOpenAuth}
              openAuth={openAuth}
              currentUser={currentUser}
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Shop" element={<ShopingListing />} />
              <Route path="/favourite" element={<Favourite />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/shop/:id" element={<ProductDetails />} />
            </Routes>
            {openAuth && (
              <Authentication openAuth={openAuth} setOpenAuth={setOpenAuth} />
            )}
            {openAuth && <ToastMessage open={open} severity={severity} />}
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
