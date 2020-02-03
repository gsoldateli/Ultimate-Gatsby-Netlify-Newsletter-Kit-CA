import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const {
    site,
    menus: { edges: menus }
  } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
        menus: allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "menu-navigation" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                description
                position
                items {
                  code
                }
              }
            }
          }
        }
      }
    `
  );

  return {
    ...site.siteMetadata,
    menus
  };
};

export default useSiteMetadata;
