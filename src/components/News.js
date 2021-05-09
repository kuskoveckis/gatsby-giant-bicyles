import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const News = () => {
  return (
    <section>
      <div className="news-heading">
        <p>latest news &amp; reviews</p>
        <div></div>
      </div>
      <div className="advert-blocks news">
        <div>
          <StaticImage
            src="../assets/images/Capture.jpg"
            alt="bicycle"
            className="advert-blocks-img"
            placeholder="tracedSVG"
          />
          <figcaption>
            ccc team takes gc podium and kom win at tour down under
          </figcaption>
          <p>january 26,2020</p>
        </div>
        <div>
          <StaticImage
            src="../assets/images/bikereconreview1.jpg"
            alt="bicycle"
            className="advert-blocks-img"
            placeholder="tracedSVG"
          />
          <figcaption>
            reign advanced pro 29 wins design &amp; innovation award in 2020!
          </figcaption>
          <p>january 23,2020</p>
        </div>
        <div>
          <StaticImage
            src="../assets/images/ReignAdvancedPro29terrain.jpg"
            alt="bicycle"
            className="advert-blocks-img"
            placeholder="tracedSVG"
          />
          <figcaption>
            rosskopf takes kom lead at first stage tour down under!
          </figcaption>
          <p>january 22,2020</p>
        </div>
        <div>
          <StaticImage
            src="../assets/images/roadcc.jpg"
            alt="bicycle"
            className="advert-blocks-img"
            placeholder="tracedSVG"
          />
          <figcaption>
            cycling award defy 5 stars and it group test winner
          </figcaption>
          <p>january 16,2020</p>
        </div>
      </div>
    </section>
  )
}

export default News
