import React from "react"
import { GrBike, GrGallery } from "react-icons/gr"
import { BsFillStarFill } from "react-icons/bs"
import { IoMdSettings } from "react-icons/io"

const BikeNavbar = () => {
  return (
    <section className="bikes-navbar sticky single-bike-navbar">
      <div>
        <GrBike className="icon" />
        <a href="#bike-specs">specs</a>
      </div>
      <div>
        <BsFillStarFill className="icon" />
        <a href="#bike-highlights">highlights</a>
      </div>
      <div>
        <GrGallery className="icon" />
        <a href="#bike-geometry">geometry</a>
      </div>
      <div>
        <IoMdSettings className="icon" />
        <a href="#bike-tech">technologies</a>
      </div>
      <div>
        <IoMdSettings className="icon" />
        <a href="https://www.giant-bicycles.com/gb">similar products</a>
      </div>
      <div>
        <IoMdSettings className="icon" />
        <a href="https://www.giant-bicycles.com/gb">you may also like</a>
      </div>
    </section>
  )
}

export default BikeNavbar
