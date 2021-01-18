import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../pages/Photos/Photos.css"

const attributestips = () => {

    return (
        <Layout>
            <SEO title="My photos" />
            
            <h1>Attributes Tips</h1>

            <h2>1 - Set Image</h2>
            <p>
                {/* import mapGif from "../../images/increase-map-bovcontrol-world-wide.gif"
                <code>img src={mapGif} className="img-fluid"</code> */}
            </p>

            <h2>2 - Set BackGround Image</h2>
            <p>
                {/* import bgImg1 from "../../images/slide1_EN.jpg"
                li id="carousel__slide1" tabIndex="0" className="carousel__slide" style={{backgroundImage:`url(${bgImg1})`, height:`80vh`}} */}
                
            </p>

            <Link to="/">Go to Main page</Link> <br />
        </Layout>
    )
}

export default attributestips
