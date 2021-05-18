import React, { useState } from "react"
import mm from "../constants/mmData"
import inches from "../constants/inchData"

const BikeTable = () => {
  const [sizeInMM, setSizeInMM] = useState(true)
  const [activeMm, isActiveMm] = useState(true)
  const [activeInches, isActiveInches] = useState(false)

  const tableMm = () => {
    isActiveInches(false)
    isActiveMm(true)
    setSizeInMM(true)
  }

  const tableInches = () => {
    isActiveInches(true)
    isActiveMm(false)
    setSizeInMM(false)
  }

  return (
    <section className="table">
      <div className="table-center">
        <div className="buttons">
          <div>
            <button
              type="button"
              onClick={tableMm}
              className={sizeInMM ? "all-buttons green" : "all-buttons"}
            >
              mm
            </button>
            <button
              type="button"
              onClick={tableInches}
              className={sizeInMM ? "all-buttons" : "all-buttons green"}
            >
              inches
            </button>
          </div>
        </div>
        <div className="table-content" id="table-content">
          {/* test */}
          <table>
            <thead>
              <tr>
                <th></th>
                <th>M</th>
                <th>L</th>
                <th>XL</th>
              </tr>
            </thead>
            <tbody>
              {sizeInMM
                ? mm.map(row => {
                    const { id, title, m, l, xl } = row
                    return (
                      <tr key={id}>
                        <th>{title}</th>
                        <td>{m}</td>
                        <td>{l}</td>
                        <td>{xl}</td>
                      </tr>
                    )
                  })
                : inches.map(row => {
                    const { id, title, m, l, xl } = row
                    return (
                      <tr key={id}>
                        <th>{title}</th>
                        <td>{m}</td>
                        <td>{l}</td>
                        <td>{xl}</td>
                      </tr>
                    )
                  })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default BikeTable
