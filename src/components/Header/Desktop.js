import React from "react";
import logo from "../../img/AIH_logo_dark_large.png";
import { Link } from "gatsby";
import styled from "styled-components";
import Container from "../Container";

const Logo = styled.img`
  display: block;
  margin: 30px auto 0;
  max-width: 36%;
`;

const Slogan = styled.h2`
  font-size: 18px;
  color: #8c8a8e;
  font-weight: 400;
  margin-top: 15px;
  margin-bottom: 46px;
  text-align: center;
`;

const HeaderWrapper = styled(Container)`
  @media (max-width: 760px) {
    display: none;
  }
`;

const Header = ({ slogan }) => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <Slogan>{slogan}</Slogan>
    </HeaderWrapper>
  );
};

export default Header;
