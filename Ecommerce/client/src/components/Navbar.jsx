import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from "../utils/images/Logo.png";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import {
  FavoriteBorder,
  MenuRounded,
  SearchRounded,
  ShoppingCartOutlined,
} from "@mui/icons-material";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* align-content: center; */
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;
const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 24px;
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;
const NavLogo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;
const Logo = styled.img`
  height: 34px;
`;
const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navlink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 1s slide-in;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1.8px solid ${({ theme }) => theme.primary};
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 28px;
  align-items: center;
  padding: 0 6px;
  color: ${({ theme }) => theme.primary};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const MobileIcon = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
const MobileIcons = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
`;
const MobileMenu = styled.ul`
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 80%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card};
  position: absolute;
  top: 80px;
  right: 0;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;
const Navbar = ({ openAuth, setOpenAuth }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <NavbarContainer>
        {/* Hamburger */}
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>
        <NavLogo>
          <Logo src={LogoImg} />
        </NavLogo>
        {/* NavBar Items */}
        <NavItems>
          <Navlink to="/">Home</Navlink>
          <Navlink to="/Shop">Shop</Navlink>
          <Navlink to="/New_Arrivals">New Arrivals</Navlink>
          <Navlink to="/Orders">Orders</Navlink>
          <Navlink to="/Contact">Contact</Navlink>
        </NavItems>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <Navlink to="/" onClick={() => setIsOpen(!isOpen)}>
              Home
            </Navlink>
            <Navlink to="/Shop" onClick={() => setIsOpen(!isOpen)}>
              Shop
            </Navlink>
            <Navlink to="/New_Arrivals" onClick={() => setIsOpen(!isOpen)}>
              New Arrivals
            </Navlink>
            <Navlink to="/Orders" onClick={() => setIsOpen(!isOpen)}>
              Orders
            </Navlink>
            <Navlink to="/Contact" onClick={() => setIsOpen(!isOpen)}>
              Contact
            </Navlink>
            <div className="flex flex-1 gap-3">
              <Button text="Sign Up" outlined small />
              <Button
                text="Sign In"
                small
                onClick={() => setOpenAuth(!openAuth)}
              />
            </div>
          </MobileMenu>
        )}
        <MobileIcons>
          <Navlink to="/search">
            <SearchRounded sx={{ color: "inherit", fontSize: "28px" }} />
          </Navlink>
          <Navlink to="/favourite">
            <FavoriteBorder sx={{ color: "inherit", fontSize: "28px" }} />
          </Navlink>
          <Navlink to="/cart">
            <ShoppingCartOutlined sx={{ color: "inherit", fontSize: "28px" }} />
          </Navlink>
          <Button text="SignIn" onClick={() => setOpenAuth(!openAuth)} />
        </MobileIcons>

        <ButtonContainer>
          <Navlink to="/search">
            <SearchRounded sx={{ color: "inherit", fontSize: "28px" }} />
          </Navlink>
          <Navlink to="/favourite">
            <FavoriteBorder sx={{ color: "inherit", fontSize: "28px" }} />
          </Navlink>
          <Navlink to="/cart">
            <ShoppingCartOutlined sx={{ color: "inherit", fontSize: "28px" }} />
          </Navlink>
          <Button text="SignIn" onClick={() => setOpenAuth(!openAuth)} />
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
