import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Filters from "../components/Filters"
import HardtailBikes from "../components/HardtailBikes"

import "../assets/css/hardtail.css"
import Seo from "../components/Seo"

const hardtail = () => {
  return (
    <>
      <Seo title="hardtail" />
      <section className="hero hardtail">
        <StaticImage
          src="../assets/images/mountain_hardtail.jpg"
          alt="bicycle"
          className="hero-image"
          placeholder="tracedSVG"
        />
        <article className="page-hero-title">
          <h1>hardtail mountain bikes</h1>
        </article>
      </section>
      <section class="bike-advert">
        <p>
          From pro-level XC race bikes to confident trail tamers, these men's
          hardtail mountain bikes feature lightweight frames and a focus on ride
          quality. Each one is purpose-built for the way you ride, whether
          that's blasting berms, gunning for KOMs, or just beginning your
          singletrack adventure.
        </p>
      </section>
      <section className="section-content">
        <Filters />
        <HardtailBikes />
      </section>
    </>
  )
}

export default hardtail
