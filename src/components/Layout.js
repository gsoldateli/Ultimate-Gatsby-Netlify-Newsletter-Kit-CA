import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar, { NavbarContext } from "../components/Navbar";
import Header, { Mobile } from "../components/Header";
import { Reset } from "../components/Reset";
import "typeface-roboto";

import useSiteMetadata from "./SiteMetadata";

export const LayoutContext = React.createContext();

const TemplateWrapper = ({ children }) => {
  const { title, description, menus } = useSiteMetadata();

  const [topMenu] = menus
    .map(({ node: { frontmatter: menu } }) => menu)
    .filter(menu => menu.position === "top");
  const footerMenu = menus.filter(
    ({ node: menu }) => menu.position === "bottom"
  );

  const [mobileMenuIsOpen, setMenuMobileOpen] = useState(false);
  return (
    <div
      style={{
        fontFamily: "roboto"
      }}
    >
      <Reset />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          type="text/css"
        ></link>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/LUMESOG.png" />
      </Helmet>
      <LayoutContext.Provider
        value={{
          menu: {
            isOpen: mobileMenuIsOpen,
            setMenuMobileOpen
          }
        }}
      >
        <Header />
        <Mobile />
        <Navbar menu={topMenu} />
        <div>{children}</div>
        <Footer />
      </LayoutContext.Provider>
    </div>
  );
};

export default TemplateWrapper;
