import React from "react";
import { Layout } from '../containers/Layout';
import { graphql } from "gatsby"
import PostLink from '../components/PostLink';

export default ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    return (
        <Layout>
          {
            edges.map(
              post => <PostLink key={post.node.id} post={post.node} />
            )
          }
        </Layout>
    );
}

// analogiczne do:
// const {title, content} = props;
//
// ^ restrukturyzacja obiektu

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            path
            title
            description
          }
        }
      }
    }
  }
`
