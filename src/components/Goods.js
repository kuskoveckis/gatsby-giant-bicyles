import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allStrapiItem {
      nodes {
        name
        id
        price
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`

const Goods = () => {
  const data = useStaticQuery(query)
  const items = data.allStrapiItem.nodes
  console.log(items)
  return (
    <section class="goods-advert">
      <div className="goods-advert-content">
        {items.map(item => {
          const { name, id, price, image } = item
          const pathToImage = getImage(image)
          return (
            <Link to="/" key={id} className="goods-item">
              <GatsbyImage
                image={pathToImage}
                alt={name}
                className="goods-adv-img"
              />
              <figcaption>{name}</figcaption>
              <p>${price}</p>
              <aside className="aside-finance">
                <span class="orangeBox">featured</span>
                <span class="blueBox">0% apr finance</span>
              </aside>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Goods
