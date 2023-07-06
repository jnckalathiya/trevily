import React from 'react'
import './Companies.css'
import wildlifef from "../../asset/image/wildlifef.png"
import Adventure from "../../asset/image/Adventure.png"
import paragliding from "../../asset/image/paragliding.png"
import hang from "../../asset/image/hang gliding.png"

const Companies = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <img src={wildlifef} alt="" />
            <img src={Adventure} alt="" />
            <img src={paragliding} alt="" />
            <img src={hang} alt="" />
        </div>

    </section>
  )
}

export default Companies