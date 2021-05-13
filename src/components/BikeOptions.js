import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

import "../assets/css/bikesHome.css"
import "../assets/css/hardtail.css"
const query = graphql`
  {
    allStrapiOption {
      nodes {
        price
        id
        spec
      }
    }
  }
`

const BikeOptions = ({ data }) => {
  const title = data.strapiBikes.title
  const image = data.strapiBikes.image
  const pathToImage = getImage(image)
  const options = useStaticQuery(query)
  const bikeOptions = options.allStrapiOption.nodes
  return (
    <div className="bikes_content_container">
      {bikeOptions.map(item => {
        const { id, price, spec } = item
        return (
          <div className="bikes_content" key={id}>
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="bikes_content-img"
            />
            <figcaption>
              {title} - {spec}
            </figcaption>
            <p>${price}</p>
            <div>Frame:ALUXX-Grade Aluminium, disc</div>
            <div>
              Fork: Suntour Raidon 29", air spring 100mm, QR, LO-R, alloy
              steerer
            </div>
            <div>Frame:ALUXX-Grade Aluminium, disc</div>
            <div>
              Wheels:Giant GX03V 29", alloy, double wall, 21mm inner width
            </div>
            <div>Shifters: SRAM Eagle SX</div>
            <div>Cranckset: SRAM Eagle SX, 30t</div>
            <div>Colours: Gloss Charcoal</div>
            <span className="link">
              <Link to="/hardtail/bike">Shop now</Link>
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default BikeOptions
