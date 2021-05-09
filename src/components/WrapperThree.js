import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const WrapperThree = () => {
  return (
    <section className="hero">
      <StaticImage
        src="../assets/images/14702.jpg"
        alt="bicycle"
        className="hero-image"
        placeholder="tracedSVG"
      />
      <article className="hero-info">
        <h1>ALL-OUT XC</h1>
        <h2>The All-New XtC Range</h2>
        <Link to="/" className="hero-link">
          LEARN MORE
        </Link>
      </article>
    </section>
  )
}

export default WrapperThree
