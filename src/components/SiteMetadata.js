import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const {
    site,
    menus: { edges: menus },
    config
  } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
        config: markdownRemark(
          frontmatter: { templateKey: { eq: "site-config" } }
        ) {
          frontmatter {
            slogan
            socialMedia {
              title
              url
              icon
            }
            menus {
              header {
                code
              }

              footer {
                code
              }
            }
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
    menus,
    config
  };
};

export default useSiteMetadata;
