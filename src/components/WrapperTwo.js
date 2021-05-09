import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const WrapperTwo = () => {
  return (
    <section className="hero">
      <StaticImage
        src="../assets/images/113297.jpg"
        alt="bicycle"
        className="hero-image"
        placeholder="tracedSVG"
      />
      <div className="hero-info">
        <h1>ALL-OUT XC</h1>
        <h2>XtC Advanced SL 29</h2>
        <Link to="/" className="hero-link">
          LEARN MORE
        </Link>
      </div>
    </section>
  )
}

export default WrapperTwo
