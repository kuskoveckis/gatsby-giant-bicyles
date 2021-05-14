import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "../assets/css/singleBike.css"

const BikeHeader = ({ data }) => {
  const title = data.strapiBikes.title
  const image = data.strapiBikes.image
  const slug = data.strapiBikes.slug
  return (
    <section>
      <div className="bike-selection">
        <div className="photo-frame">
          <iframe
            className="cell"
            name="full-size"
            width="1000"
            height="594"
            // src="../assets/images/singleBike/MY20_Talon_29_tech.jpg"
          ></iframe>
          <nav className="cell">
            <a
              href="../assets/images/singleBike/MY20_Talon_29_tech.jpg"
              target="full-size"
            >
              <img src="../assets/images/singleBike/MY20_Talon_29_tech%20thumbnail.jpg" />
            </a>
            <a
              href="../assets/images/singleBike/Talon292MGrey-Silver-01787.jpg"
              target="full-size"
            >
              <img src="../assets/images/singleBike/Talon292MGrey-Silver-01787%20thumbnail.jpg" />
            </a>
            <a
              href="../assets/images/singleBike/Talon292MGrey-Silver-01783.jpg"
              target="full-size"
            >
              <img src="../assets/images/singleBike/Talon292MGrey-Silver-01783%20thumbnail.jpg" />
            </a>
            <a
              href="../assets/images/singleBike/Talon292MGrey-Silver-01793.jpg"
              target="full-size"
            >
              <img src="../assets/images/singleBike/Talon292MGrey-Silver-01793%20thumbnail.jpg" />
            </a>
            <a
              href="../assets/images/singleBike/Talon292MGrey-Silver-01782.jpg"
              target="full-size"
            >
              <img src="../assets/images/singleBike/Talon292MGrey-Silver-01782%20thumbnail.jpg" />
            </a>
          </nav>
        </div>

        <div className="size-selector">
          <div className="categories">
            <Link to="/hardtail">Bikes&nbsp;&nbsp;</Link>
            <div>>&nbsp;</div>
            <Link to={`/hardtail/${slug}`}>{title}</Link>
          </div>
          <h1>{title}</h1>
          <h3 className="gray">2020</h3>
          <div className="reviews">
            No reviews / <a href="#">Write the First Review</a>
          </div>
          <div className="price">$599</div>
          <div className="gray" id="small">
            or from $99.83 per month 0% APR
          </div>
          <select id="size">
            <option>Select your size</option>
            <option>Select your size</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
          <div className="gray" id="question">
            <a href="#">What is my size?</a>
          </div>
          <div className="dark-gray">SHARE</div>
          <div className="social-media"></div>
        </div>
      </div>
    </section>
  )
}

export default BikeHeader
