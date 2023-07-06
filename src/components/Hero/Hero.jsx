import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import {motion} from 'framer-motion'
import heroimage from "../../asset/image/hero-image.jpg"
import tent from "../../asset/image/Vector.png"
import firewoods from "../../asset/image/Vector-1.png"
import activites from "../../asset/image/Vector-2.png"

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{y:'2rem', opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{
              duration:2,
              type: 'spring'
            }}
            >
              Are you <br/>ready to travel <br/>with Trevily?

            </motion.h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">you can enjoy RV Sites for all sizes of campers andmotorhomes,
</span>
            <span className="secondaryText"> as well as, our fully equipped cottages!</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="#A73838" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <img src={tent} alt=""/>
              </span>
              <span className="secondaryText">Tents Rent</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <img src={firewoods} alt=""  />
              </span>
              <span className="secondaryText">Firewoods</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <img src={activites} alt="" />
              </span>
              <span className="secondaryText">Activites</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <motion.div 
        initial={{x:"7rem", opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{
          duration:2,
          type:"spring"
        }}
        
        className="flexCenter hero-right">
          <div className="image-container">
            <img src={heroimage} alt="" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
