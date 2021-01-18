import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../pages/Photos/Photos.css"

const Photos2 = () => {

    const data = useStaticQuery(graphql`
        query Images2 {
            bgImg1: file(relativePath: { eq: "bg-image.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
        }
    `)
    console.log(data)

    return (
        <Layout>
            <SEO title="My photos" />
            <h1>Background Image</h1>
             <a href="https://www.gatsbyjs.com/plugins/gatsby-background-image/">https://www.gatsbyjs.com/plugins/gatsby-background-image/</a>

            <h2>BG</h2>
            <BackgroundImage fluid={data.bgImg1.childImageSharp.fluid} 
              className="bgImg"
            />

            <Link to="/">Go to Main page</Link> <br />
        </Layout>
    )
}

export default Photos2
