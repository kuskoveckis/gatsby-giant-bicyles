import React, { useState } from "react"
import mm from "../constants/mmData"
import inches from "../constants/inchData"

const BikeTable = () => {
  const [sizeInMM, setSizeInMM] = useState(true)

  return (
    <section className="table">
      <div className="table-center">
        <div className="buttons">
          <div>
            <span
              id="sp1"
              onClick={() => {
                setSizeInMM(true)
              }}
            >
              mm
            </span>
            <span
              id="sp2"
              onClick={() => {
                setSizeInMM(false)
              }}
            >
              inches
            </span>
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
