import React, { useContext } from "react";
import { Link, navigate } from "gatsby";
import styled from "styled-components";

import Container from "./Container";
import useLocation from "../hooks/useLocation";

import { LayoutContext } from "./Layout";

export const NavbarContext = React.createContext();

const NavbarWrapper = styled.div`
  background-color: #414143;
  color: #fff;

  @media (max-width: 760px) {
    position: fixed;
    top: 0;
    left: ${props => (props.isOpen ? "0" : "-75%")};
    width: 75%;
    height: 100vh;
    z-index: 10;
    overflow-y: scroll;
    transition: left 0.3s;
    padding: 0;
  }
`;

const NavigationLinks = styled.ul`
  height: 80px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;

const NavigationItem = styled.li`
  @media (min-width: 761px) {
    &:first-of-type {
      border-left: 1px solid #979799;
    }
    flex-grow: 1;
    text-align: center;
    position: relative;
    border-right: 1px solid #979799;
    text-transform: uppercase;
    height: 80px;

    &:hover .arrow {
      transform: rotate(-180deg);
    }
  }

  .arrow {
    opacity: 0.7;
    margin-left: 1rem;
    line-height: 30px;
    font-size: 27px;
    transition: transform 0.3s;
    @media (max-width: 760px) {
      width: 100%;
      text-align: center;
      margin-left: 0;
      transform: ${({ isExpanded }) =>
        isExpanded ? "rotate(-180deg)" : "rotate(0)"};
    }
  }

  @media (max-width: 760px) {
    padding: 20px;
    width: 100%;
    border-bottom: 1px solid hsla(0, 0%, 80%, 0.2);
    text-align: center;
  }
`;

const SubmenuWrapper = styled.ul`
  list-style: none;
  padding: 0;
  opacity: 0;
  max-height: 0;
  transition: opacity 0.3s, padding 0.3s;
  overflow: hidden;

  @media (min-width: 761px) {
    left: 0;
    top: -2px;
    top: 80px;
    width: 100%;
    background-color: #c21f3c;
    color: #fff;
    padding: 0;
    position: absolute;
    display: flex;
    flex-flow: column wrap;
    z-index: 10;

    ${NavigationItem}:hover & {
      padding: 14px 0;
      max-height: 600px;
      opacity: 1;
      overflow: initial;
    }
  }

  @media (max-width: 760px) {
    padding: ${({ isExpanded }) => isExpanded && "14px 0"};
    max-height: ${({ isExpanded }) => isExpanded && "600px"};
    opacity: ${({ isExpanded }) => isExpanded && "1"};
    overflow: ${({ isExpanded }) => isExpanded && "initial"};
  }
`;

const SubmenuNavigationItem = styled.li`
  @media (min-width: 761px) {
    margin-left: -10px;
    margin-right: -10px;
  }
`;

const NavigationLink = styled.span`
  font-size: 18px;
  font-weight: 400;
  width: 100%;

  @media (min-width: 761px) {
    font-size: 16px;
    height: 80px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    transition: background-color 0.3s, margin-top 0.3s, height 0.3s,
      margin-bottom 0.3s;

    ${NavigationItem}:hover & {
      background-color: #c21f3c;
      height: 90px;
      margin-top: -10px;
    }

    background-color: ${props => (props.active ? "#c21f3c" : "")};
  }

  ${SubmenuWrapper} & {
    font-weight: 500;
    font-size: 14px;
    text-align: left;
    width: 100%;
    display: inline-block;
    padding: 14px 42px;
  }
`;

const SubmenuNavigationLink = styled(Link)`
  font-size: 0.9rem;
  transition: background-color 0.3s;
  @media (min-width: 761px) {
    font-weight: 500;
    font-size: 14px;
    text-align: left;
    width: 100%;
    display: inline-block;
    padding: 14px 42px;

    :hover {
      background: #ac1b35;
    }

    background: ${({ active }) => active && "#ac1b35"};
  }

  cursor: pointer;
`;

const BackdropLayer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #ccc;
  z-index: 5;
  opacity: 0;
  left: -100%;
  transition: opacity 2s, left 0.3s;
  background-color: rgba(202, 202, 204, 0.6);

  opacity: ${props => (props.isOpen ? 1 : 0)};
  left: ${props => (props.isOpen ? "0" : "-100%")};

  @media (min-width: 760px) {
    display: none;
  }
`;

const Arrow = () => <i className="arrow fa fa-angle-down"></i>;

const NavigationLinkGroup = ({ linkGroup, setMenuMobileOpen }) => {
  const {
    location: { pathname }
  } = useLocation();
  console.log(pathname);
  const [isExpanded, setIsExpanded] = React.useState();
  const [currentGroupPath, currentPath] = pathname
    .split("/")
    .filter(path => path.length > 0);
  console.log(
    [currentGroupPath, currentPath],
    linkGroup.url === `/${currentGroupPath}`
  );
  const isGroupActive =
    linkGroup.url === `/${currentGroupPath}` ||
    linkGroup.url === `/${currentPath}`;

  return (
    <NavigationItem
      isExpanded={isExpanded}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <NavigationLink active={isGroupActive}>
        {linkGroup.submenus && linkGroup.submenus.length > 0 ? (
          <span style={{ cursor: "default" }}>
            {linkGroup.title}{" "}
            {linkGroup.submenus && linkGroup.submenus.length > 0 && <Arrow />}
          </span>
        ) : (
          <Link
            to={linkGroup.url}
            onClick={evt => {
              evt.preventDefault();
              setMenuMobileOpen(false);
              setTimeout(async () => await navigate(linkGroup.url), 300);
            }}
            style={{ cursor: "pointer" }}
          >
            {linkGroup.title}{" "}
            {linkGroup.submenus && linkGroup.submenus.length > 0 && <Arrow />}
          </Link>
        )}

        {linkGroup.submenus && linkGroup.submenus.length > 0 && (
          <SubmenuWrapper isExpanded={isExpanded}>
            {linkGroup.submenus.map(submenuItem => {
              const isSubmenuLinkActive = submenuItem.url === pathname;
              console.log("url", submenuItem.url, "path", pathname);
              return (
                <SubmenuNavigationItem
                  key={`${submenuItem.title}-${submenuItem.url}`}
                >
                  <SubmenuNavigationLink
                    active={isSubmenuLinkActive}
                    to={submenuItem.url}
                    onClick={evt => {
                      evt.preventDefault();
                      setMenuMobileOpen(false);
                      setTimeout(
                        async () => await navigate(submenuItem.url),
                        200
                      );
                    }}
                  >
                    {submenuItem.title}
                  </SubmenuNavigationLink>
                </SubmenuNavigationItem>
              );
            })}
          </SubmenuWrapper>
        )}
      </NavigationLink>
    </NavigationItem>
  );
};

const Navbar = ({ menu }) => {
  const { menu: menuContext } = useContext(LayoutContext);

  const links = JSON.parse(menu.items.code);

  return (
    <>
      <NavbarWrapper isOpen={menuContext.isOpen}>
        <Container>
          <NavigationLinks>
            {links &&
              links.map(link => {
                return (
                  <NavigationLinkGroup
                    key={link.title}
                    linkGroup={link}
                    setMenuMobileOpen={menuContext.setMenuMobileOpen}
                  />
                );
              })}
          </NavigationLinks>
        </Container>
      </NavbarWrapper>
      <BackdropLayer
        onClick={() => menuContext.setMenuMobileOpen(false)}
        isOpen={menuContext.isOpen}
      />
    </>
  );
};
export default Navbar;
