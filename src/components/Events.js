import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Events = () => {
  return (
    <section className="events">
      <div class="events-heading">
        <p>events</p>
        <div className="underscore"></div>
      </div>
      <article className="events-content">
        <div>
          <StaticImage
            src="../assets/images/injury.jpg"
            alt="bicycle"
            className="events-img"
            placeholder="tracedSVG"
          />
          <figcaption>
            injury prevention for long distance events with giant store camden
          </figcaption>
          <p>february 10</p>
          <p>giant store camden</p>
        </div>
        <div>
          <StaticImage
            src="../assets/images/Sportive-Logo-2019.jpg"
            alt="bicycle"
            className="events-img"
            placeholder="tracedSVG"
          />
          <figcaption>giant lincoln cycle sportive</figcaption>
          <p>june 21</p>
          <p>giant store lincoln</p>
        </div>
      </article>
    </section>
  )
}

export default Events
