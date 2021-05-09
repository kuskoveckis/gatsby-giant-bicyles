import React from "react"
import Advert from "../components/Advert"
import AdvertCards from "../components/AdvertCards"
import Events from "../components/Events"
import Goods from "../components/Goods"
import Hero from "../components/Hero"
import News from "../components/News"
import WrapperThree from "../components/WrapperThree"
import WrapperTwo from "../components/WrapperTwo"

export default function Home() {
  return (
    <main className="main-content">
      <Hero />
      <Advert />
      <Goods />
      <AdvertCards />
      <WrapperTwo />
      <News />
      <Events />
      <WrapperThree />
    </main>
  )
}
