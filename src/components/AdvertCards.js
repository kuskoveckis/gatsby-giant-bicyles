import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const AdvertCards = () => {
  return (
    <section className="advert-blocks">
      <div>
        <StaticImage
          src="../assets/images/injury.jpg"
          alt="bicycle"
          className="advert-blocks-img"
          placeholder="tracedSVG"
        />
        <div class="centered">giant cycle to work</div>
      </div>
      <div>
        <StaticImage
          src="../assets/images/introduction.jpg"
          alt="bicycle"
          className="advert-blocks-img"
          placeholder="tracedSVG"
        />
        <div className="centered">arx sports range</div>
      </div>
      <div>
        <StaticImage
          src="../assets/images/milliman_Contenc.jpg"
          alt="bicycle"
          className="advert-blocks-img"
          placeholder="tracedSVG"
        />
        <div className="centered">guides</div>
      </div>
    </section>
  )
}

export default AdvertCards
