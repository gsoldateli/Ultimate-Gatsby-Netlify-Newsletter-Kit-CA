import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";

import Layout from "../../components/Layout";
// import BlogRoll from "../../components/BlogRoll";

const SolutionsList = ({ data }) => {
  console.log(data.allMarkdownRemark);
  const { edges: solutions } = data.allMarkdownRemark;
  console.log({ solutions });
  //   const solutions = null;
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <ul>
              {solutions &&
                solutions.map(({ node: solution }) => {
                  return (
                    <li key={solution.fields.slug}>
                      <Link className="button" to={solution.fields.slug}>
                        {solution.frontmatter.title}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query SolutionsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "solution-page" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                image {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <SolutionsList data={data} count={count} />}
  />
);
