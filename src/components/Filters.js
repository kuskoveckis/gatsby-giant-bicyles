import React from "react"

const Filters = () => {
  return (
    <div className="filters">
      <h3>Category</h3>
      <div className="underline"></div>
      <form>
        <div className="check">
          <label for="recreation">
            <input
              className="option-recreation"
              value="recreation"
              type="checkbox"
              id="recreation"
              name="Recreation"
            />
            Recreation
          </label>
        </div>
        <div className="check">
          <label for="trail">
            <input type="checkbox" id="trail" name="trail" />
            Trail
          </label>
        </div>
        <div className="check">
          <label for="xc">
            <input type="checkbox" id="xc" name="cross country" />
            XC
          </label>
        </div>
      </form>
      <h3>Frame Material</h3>
      <div className="underline"></div>
      <form action="">
        <div className="check">
          <label for="composite">
            <input type="checkbox" id="composite" name="composite" />
            Composite/Carbon
          </label>
        </div>
        <div className="check">
          <label for="aluminium">
            <input type="checkbox" id="aluminium" name="aluminium" />
            Aluminium
          </label>
        </div>
      </form>
      <h3>Wheel Size</h3>
      <div className="underline"></div>
      <form action="">
        <div className="check">
          <label for="large">
            <input type="checkbox" id="large" name="large" />
            29"
          </label>
        </div>
        <div className="check">
          <label for="medium">
            <input type="checkbox" id="medium" name="medium" />
            27.5"
          </label>
        </div>
        <div className="check">
          <label for="small">
            <input type="checkbox" id="small" name="small" />
            26"
          </label>
        </div>
      </form>
      <h3>Collection</h3>
      <div className="underline"></div>
      <form action="">
        <div className="check">
          <label for="twenty">
            <input type="checkbox" id="twenty" name="" />
            2020
          </label>
        </div>
        <div className="check">
          <label for="ninetheen">
            <input type="checkbox" id="ninetheen" name="" />
            2019
          </label>
        </div>
      </form>
      <h3>Sale</h3>
      <div className="underline"></div>
      <form action="">
        <div className="check">
          <label for="sale">
            <input type="checkbox" id="sale" name="sale" />
            On Sale
          </label>
        </div>
      </form>
    </div>
  )
}

export default Filters
