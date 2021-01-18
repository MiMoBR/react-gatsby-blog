import React from 'react'
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
    console.log(data)    
    
    return (        
        <Layout>
            <SEO title="My photos" />
            
            <h1>First Blog</h1>
            
            {data.allMarkdownRemark.edges.map( post => (
                <div key={post.node.id}>
                    <h2>{post.node.frontmatter.title}</h2>

                    <Link to={post.node.frontmatter.path}>To read more</Link><br/>
                </div>
                )
            )}

            <br/><br/>

            <Link to="/">Go to Main page</Link> <br />
        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                    }
                }
            }
        }
    }`

export default BlogPage