import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import BikeHeader from "../components/BikeHeader"
import Advert from "../components/Advert"
import BikeNavbar from "../components/BikeNavbar"
import BikeDescription from "../components/BikeDescription"
import BikeTech from "../components/BikeTech"

import "../assets/css/singleBike.css"
import BikeTable from "../components/BikeTable"

const SingleBike = ({ data }) => {
  return (
    <div className="main-content">
      <BikeHeader data={data} />
      <Advert />
      <BikeNavbar />
      <BikeDescription />
      <BikeTech />
      <section class="highlights bike-highlight">
        <div className="center">
          <h1>highlights</h1>
          <p>
            Built on a lightweight ALUXX aluminium frame that features classic
            hardtail design plus the balanced riding characteristics of larger
            diameter 29-inch wheels, Talon is a great choice for XC terrain. The
            frame geometry is specifically designed for it;s size and a 100mm
            suspension fork. It's a confident ride that's perfect for ambitious
            riders who want to take their off-road skills to the next level.
          </p>
          <StaticImage
            src="../../assets/images/MY20_Talon_29_tech.jpg"
            alt="bicycle"
            className="bike-image"
            placeholder="tracedSVG"
          />
        </div>
      </section>
      <section class="geometry">
        <h1>geometry</h1>
        <StaticImage
          src="../assets/images/singleBike/giant-offroad-geo.png"
          alt="bicycle"
          className="img"
          placeholder="tracedSVG"
        />
      </section>
      <BikeTable />
      <section class="technologies">
        <div className="center">
          <h1>technologies</h1>
          <StaticImage
            src="../../assets/images/Aluxx_1508267313.jpg"
            alt="bicycle"
            className="tech"
            placeholder="tracedSVG"
          />
          <figcaption>ALLUX</figcaption>
        </div>
      </section>
    </div>
  )
}

export const query = graphql`
  query GetBike($title: String) {
    strapiBikes(title: { eq: $title }) {
      title
      slug
      image {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`
export default SingleBike
