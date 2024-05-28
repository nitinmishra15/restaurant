import React from 'react';
import {Link} from "react-router-dom";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const About = () => {
  return (
    <section className='about' id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food</p>
          </div>
          <p className="mid">
          Our mission is simple: to provide exceptional food that nourishes both body and soul. We are committed to using fresh, locally sourced ingredients whenever possible, and we take pride in offering a diverse menu that caters to a wide range of tastes and preferences. Whether you're a foodie looking for a new culinary adventure or simply seeking a comforting classic, we have something special for everyone.
            </p>
            <Link to={"/"}>Explore Menu <span>
              <HiOutlineArrowNarrowRight/>
              </span>
              </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about"/>
        </div>
      </div>
    </section>
  )
}

export default About