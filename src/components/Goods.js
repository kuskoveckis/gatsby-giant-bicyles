import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

const Goods = () => {
  return (
    <section class="goods-advert">
      <div className="goods-advert-content"></div>
      <article id="shopLink">
        <img src="assets/index/adv/MY20_CONTEND_SL_2_DISC.jpg" />
        <figcaption>contend sl 2 disc</figcaption>
        <p>$4,069</p>
        <aside className="aside-finance">
          <p class="orangeBox">featured</p>
          <p class="blueBox">0% apr finance</p>
        </aside>
        <div class="shopBox">
          <a href="#">Shop now</a>
        </div>
      </article>
    </section>
  )
}

export default Goods
