import React from "react"
import { AiFillHome } from "react-icons/ai"
import { SiGooglecalendar } from "react-icons/si"
import { FaPiggyBank } from "react-icons/fa"

const Advert = () => {
  return (
    <section class="advert">
      <div className="advert-content">
        <div class="delivery">
          <AiFillHome className="adv-img" />
          <div>
            <h4>Free Home Delivery</h4>
            <p>On Selected models</p>
          </div>
        </div>
        <div class="returns">
          <SiGooglecalendar className="adv-img" />
          <div>
            <h4>Free returns</h4>
            <p>Within 28 days</p>
          </div>
        </div>
        <div class="finance">
          <FaPiggyBank className="adv-img" />
          <div>
            <h4>0% Finance Available</h4>
            <p>Starting from $150+</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advert
