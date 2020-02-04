import React, { useContext } from "react";
import logo from "../../img/AIH_logo_light_large.png";
import { Link } from "gatsby";
import styled from "styled-components";

import { LayoutContext } from "../Layout";

const Logo = styled.img`
  display: block;
  max-width: 240px;

  @media (max-width: 500px) {
    max-width: 150px;
  }
`;

const Slogan = styled.h2`
  font-size: 14px;
  font-weight: 300;
  margin-top: 6px;
  @media (max-width: 520px) {
    font-size: 10px;
  }
`;

const HeaderWrapper = styled.div`
  @media (min-width: 760px) {
    display: none;
  }
  background-color: #414143;
  padding: 50px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  color: #fff;
`;

const Hamburger = styled.div`
  display: inline-flex;
  max-height: 100px;
  align-self: center;

  .hamburger {
    padding: 15px 15px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
  }
  .hamburger:hover {
    opacity: 0.7;
  }
  .hamburger.is-active:hover {
    opacity: 0.7;
  }
  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner::before,
  .hamburger.is-active .hamburger-inner::after {
    background-color: #cacacc;
  }

  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: #cacacc;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: "";
    display: block;
  }
  .hamburger-inner::before {
    top: -10px;
  }
  .hamburger-inner::after {
    bottom: -10px;
  }

  .hamburger-inner {
    transition-duration: 0.075s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger-inner::before {
    transition: top 0.075s 0.12s ease, opacity 0.075s ease;
  }
  .hamburger-inner::after {
    transition: bottom 0.075s 0.12s ease,
      transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .is-active .hamburger-inner {
    transform: rotate(45deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .is-active .hamburger-inner::before {
    top: 0;
    opacity: 0;
    transition: top 0.075s ease, opacity 0.075s 0.12s ease;
  }
  .is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.075s ease,
      transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;

const Header = () => {
  const {
    menu: { isOpen, setMenuMobileOpen }
  } = useContext(LayoutContext);
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Link to="/">
          <Logo src={logo} />
        </Link>
        <Slogan>
          Democratizing Prosperity: Through Innovation, Cultural Transformation,
          and Technology
        </Slogan>
      </LogoWrapper>
      <Hamburger onClick={() => setMenuMobileOpen(!isOpen)}>
        <button className={`hamburger ${isOpen && "is-active"}`} type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </Hamburger>
      {/* <button onClick={() => setMenuMobileOpen(!isOpen)}>
        {isOpen ? "Fechar" : "Abrir"}
      </button> */}
    </HeaderWrapper>
  );
};

export default Header;
