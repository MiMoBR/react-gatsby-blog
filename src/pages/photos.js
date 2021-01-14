import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../pages/Photos/Photos.css"

const Photos = () => {

    const data = useStaticQuery(graphql`
        query Images {
            images: allFile(filter: { relativeDirectory: { eq: "gallery"}}){
                nodes {
                    id
                    childImageSharp {
                        fixed(
                            width: 200,
                            height: 200){
                          ...GatsbyImageSharpFixed
                        }
                      }
                }
            }
            image: file(relativePath: {eq: "using-gatsby-image.png"}) {
                id
                childImageSharp {
                  fixed(
                      width:600){
                    ...GatsbyImageSharpFixed
                  }
                  fluid {
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
            
            <h1>Using IMG Gatsby</h1>
            <p>https://www.gatsbyjs.com/plugins/gatsby-image/</p>
            <p>npm install gatsby-image</p>
            <p>npm install gatsby-transformer-sharp gatsby-plugin-sharp</p>

            <h2>With Fixed</h2>
            <Img fixed={data.image.childImageSharp.fixed} /><br/>

            <h2>With Fluid</h2>
            <Img fluid={data.image.childImageSharp.fluid} className="imgFluid" /> <br/>

            <h2>With Fluid</h2>
            <div className="gallery">
                {data.images.nodes.map(image => (
                    <Img 
                        key={image.id}
                        fixed={image.childImageSharp.fixed}
                    />
                ))}
            </div>
    
            <Link to="/">Go to Main page</Link> <br />
        </Layout>
    )
}

export default Photos
