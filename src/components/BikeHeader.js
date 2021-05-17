import React from "react"
import { Link } from "gatsby"

import mainImage from "../assets/images/singleBike/MY20_Talon_29_tech.jpg"
import imgOne from "../assets/images/singleBike/Talon292MGrey-Silver-01782.jpg"
import imgTwo from "../assets/images/singleBike/Talon292MGrey-Silver-01783.jpg"
import imgThree from "../assets/images/singleBike/Talon292MGrey-Silver-01787.jpg"
import imgFour from "../assets/images/singleBike//Talon292MGrey-Silver-01793.jpg"

import tmbOne from "../assets/images/singleBike/Talon292MGrey-Silver-01782 thumbnail.jpg"
import tmbTwo from "../assets/images/singleBike/Talon292MGrey-Silver-01783 thumbnail.jpg"
import tmbThree from "../assets/images/singleBike/Talon292MGrey-Silver-01787 thumbnail.jpg"
import tmbFour from "../assets/images/singleBike/Talon292MGrey-Silver-01793 thumbnail.jpg"
import tmbfive from "../assets/images/singleBike/MY20_Talon_29_tech thumbnail.jpg"

import "../assets/css/singleBike.css"

const BikeHeader = ({ data }) => {
  const title = data.strapiBikes.title
  const image = data.strapiBikes.image
  const slug = data.strapiBikes.slug
  return (
    <section className="section-center">
      <div className="bike-header">
        <div className="photo-frame">
          <div className="responsive-iframe-container">
            <div name="full-size" className="responsive-iframe">
              <img src={mainImage} alt="bike-img" />
            </div>
            <nav className="img-link">
              <a href={imgOne} target="full-size">
                <img src={tmbOne} alt="bike" />
              </a>
              <a href={imgTwo} target="full-size">
                <img src={tmbTwo} alt="bike" />
              </a>
              <a href={imgThree} target="full-size">
                <img src={tmbThree} alt="bike" />
              </a>
              <a href={imgFour} target="full-size">
                <img src={tmbFour} alt="bike" />
              </a>
              <a href={mainImage} target="full-size">
                <img src={tmbfive} alt="bike" />
              </a>
            </nav>
          </div>
        </div>

        <div className="size-selector">
          <div className="categories">
            <Link to="/hardtail">Bikes&nbsp;&nbsp;</Link>
            <div>&gt;&nbsp;</div>
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
