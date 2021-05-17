import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { GrBike, GrGallery } from "react-icons/gr"
import { BsFillStarFill } from "react-icons/bs"
import { IoMdSettings } from "react-icons/io"
import Gallery from "../../components/Gallery"

import "../../assets/css/bikesHome.css"
import "../../assets/css/hardtail.css"
import BikeOptions from "../../components/BikeOptions"

const BikeTemplate = ({ data }) => {
  return (
    <>
      <section className="hero hardtail">
        <StaticImage
          src="../../assets/images/MY20_Talon_29_banner_1573255023.jpg"
          alt="bicycle"
          className="hero-image"
          placeholder="tracedSVG"
        />
        <article className="page-hero-title">
          <h1>{data.strapiBikes.title}</h1>
        </article>
      </section>
      <section className="bikes-navbar">
        <div>
          <GrBike className="icon" />
          <a href="https://www.giant-bicycles.com/gb">models</a>
        </div>
        <div>
          <BsFillStarFill className="icon" />
          <a href="https://www.giant-bicycles.com/gb">highlights</a>
        </div>
        <div>
          <GrGallery className="icon" />
          <a href="https://www.giant-bicycles.com/gb">gallery</a>
        </div>
        <div>
          <IoMdSettings className="icon" />
          <a href="https://www.giant-bicycles.com/gb">technologies</a>
        </div>
        <div>
          <IoMdSettings className="icon" />
          <a href="https://www.giant-bicycles.com/gb">360 view</a>
        </div>
      </section>
      <section class="bike-advert">
        <p>
          Get a feel for the trail with this aluminum hardtail made for aspiring
          singletrack riders. It features stable, fast-rolling wheels so you can
          push the pace on climbs and let on the descents.
        </p>
      </section>
      <BikeOptions data={data} />
      <section class="highlights">
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
      <section class="photo-gallery">
        <h1>gallery</h1>
        <Gallery />
      </section>

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
    </>
  )
}

export const query = graphql`
  query GetSingleBike($title: String) {
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
export default BikeTemplate
