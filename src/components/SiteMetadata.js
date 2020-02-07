import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const { site, config } = useStaticQuery(
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
      }
    `
  );

  return {
    ...site.siteMetadata,
    config
  };
};

export default useSiteMetadata;
