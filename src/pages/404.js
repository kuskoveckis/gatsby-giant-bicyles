import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <Seo title="not found" />
      <section className="main-content">
        <div className="error">
          <h1>Something went wrong...</h1>
          <StaticImage
            src="../assets/images/undraw_page_not_found_su7k.svg"
            alt="error"
            className="error-img"
            placeholder="tracedSVG"
          />
        </div>
      </section>
    </>
  )
}

export default Error
