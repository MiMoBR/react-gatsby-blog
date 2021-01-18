import React from 'react'
import { Link } from "gatsby"
import { graphql } from "gatsby"

export default function Template({ data }) {
    const post = data.markdownRemark

    return (
        <div>
            <Link to="/blog">Blog</Link><br />

            <h1>{post.frontmatter.title}</h1>

            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }`