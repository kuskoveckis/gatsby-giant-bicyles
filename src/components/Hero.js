import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <section className="hero">
      <StaticImage
        src="../assets/images/113369.jpg"
        alt="bicycle"
        className="hero-image"
        placeholder="tracedSVG"
      />
      <article className=" hero-info">
        <h1>2020's here</h1>
        <h2>Ready to ride?</h2>
        <Link to="/" className="hero-link">
          shop now
        </Link>
      </article>
    </section>
  )
}

export default Hero
