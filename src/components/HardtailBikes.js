import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allStrapiBikes(sort: { fields: title, order: DESC }) {
      nodes {
        title
        wheels
        id
        frame
        category
        offer
        price
        slug
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`

const HardtailBikes = () => {
  const data = useStaticQuery(query)
  const items = data.allStrapiBikes.nodes
  return (
    <section className="hardtail-bikes">
      {items.map(item => {
        const {
          title,
          wheels,
          id,
          frame,
          category,
          offer,
          price,
          slug,
          image,
        } = item
        const pathToImage = getImage(image)
        return (
          <div className="bike-item cont">
            <GatsbyImage image={pathToImage} alt={title} className="bike-img" />
            <figcaption>{title}</figcaption>
            <p>${price}</p>
            <aside className="aside-finance">
              <span className="blueBox">{offer}</span>
            </aside>
            <Link to={`/hardtail/${slug}`} class="shop-btn">
              Shop now
            </Link>
          </div>
        )
      })}
    </section>
  )
}

export default HardtailBikes
