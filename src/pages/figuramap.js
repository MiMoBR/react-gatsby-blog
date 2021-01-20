import React from 'react'
import imageMap from "../../src/images/gatsby-astronaut.png"

const Figuramap = () => {
    return (
        <div>
            <img src={imageMap} usemap="#image-map" />

            <map name="image-map">
                <area alt="map" title="map" href="#theHrefMap" coords="599,176,75" shape="circle" />
                <area alt="" title="" href="#theHrefMap" coords="382,253,77" shape="circle" />
                <area alt="" title="" href="#theHrefMap" coords="384,378,32" shape="circle" />
                <area alt="" title="" href="#theHrefMap" coords="390,534,68" shape="circle" />
            </map>

        </div>
    )
}

export default Figuramap