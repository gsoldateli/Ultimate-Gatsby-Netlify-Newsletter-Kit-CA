import React from "react";
//import { Link } from 'gatsby'

/*import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'*/

const Footer = class extends React.Component {
  render() {
    return (
      <footer
        style={{
          height: "150px"
        }}
      >
        <div className="content has-text-centered">
          Boilerplate adapted from Netlify{" "}
          <a href="https://github.com/netlify-templates/gatsby-starter-netlify-cms">
            official Gatsby CMS starter
          </a>
        </div>
      </footer>
    );
  }
};

export default Footer;
