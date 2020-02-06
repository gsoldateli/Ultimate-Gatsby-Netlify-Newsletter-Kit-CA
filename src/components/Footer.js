import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Logo from "../img/AIH_logo_light_large.png";
import { Link } from "gatsby";

/*import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'*/

const FooterWrapper = styled.footer`
  background-color: #414143;
  color: #979799;
  padding: 2.5rem;
  position: relative;
`;

const FooterLogoWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;
const FooterLogo = styled.img`
  max-height: 150px;
`;

const Slogan = styled.h3`
  margin: 0 auto;
  text-align: center;
  @media (max-width: 520px) {
    font-size: 10px;
  }
`;

const Copyright = styled.span`
  margin-top: 0;
  color: #db4127;
`;

const SocialWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 3rem 0;
  justify-content: center;
  border-top: 1px solid rgba(151, 151, 153, 0.3);
  border-bottom: 1px solid rgba(151, 151, 153, 0.3);
  margin-bottom: 100px;
`;

const SocialIcon = styled.a`
  font-size: 2rem !important;
  margin-left: 2rem;
  opacity: 1;
  transition: opacity 0.3s;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const NavigationWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6rem;
  @media (max-width: 780px) {
    flex-flow: column wrap;
  }
`;

const NavigationColumn = styled.ul`
  h2 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  a {
    color: #cacacc;
    text-transform: capitalize;
    display: inline-block;
    padding: 0.5rem 0;
    transition: color 0.3s;
    font-weight: 700;

    &:hover {
      color: #979799;
    }
  }
  @media (max-width: 780px) {
    margin-bottom: 2rem;
  }
`;
const Footer = ({ socialMedia, menu, slogan }) => {
  console.log({ menu });
  return (
    <FooterWrapper>
      <Container>
        <NavigationWrapper>
          {menu.map(menuColumn => {
            return (
              <NavigationColumn key={menuColumn.title}>
                <li>
                  <h2>{menuColumn.title}</h2>
                </li>
                {menuColumn.submenus &&
                  menuColumn.submenus.length > 0 &&
                  menuColumn.submenus.map(link => {
                    return (
                      <li key={link.title}>
                        <Link to={link.url}>{link.title}</Link>
                      </li>
                    );
                  })}
              </NavigationColumn>
            );
          })}
        </NavigationWrapper>
        <SocialWrapper>
          {socialMedia &&
            socialMedia.length > 0 &&
            socialMedia.map(({ url, icon }) => (
              <SocialIcon href={url} className={icon} />
            ))}
        </SocialWrapper>
        <FooterLogoWrapper>
          <Link to="/">
            <FooterLogo src={Logo} />
          </Link>
          <Slogan>{slogan}</Slogan>
          <Copyright>© {new Date().getFullYear()} AI Humanity Inc.</Copyright>
        </FooterLogoWrapper>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
