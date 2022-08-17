import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Monster Jam, Official Grave Digger Monster Truck, Die-Cast Vehicle, 1:24 Scale"
            price={30.86}
            image="https://m.media-amazon.com/images/I/81cOFkiQFeL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Sigma 150-600mm 5-6.3 Contemporary DG OS HSM Lens for Canon"
            price={865}
            image="https://m.media-amazon.com/images/I/81o6z3YrNZL._AC_SL1500_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Fitbit Charge 5 Advanced Fitness & Health Tracker with Built-in GPS, Stress Management Tools, Sleep Tracking, 24/7 Heart Rate and More, Black/Graphite, One Size (S &L Bands Included)"
            price={119.99}
            image="https://m.media-amazon.com/images/I/41iag5vRGVL._AC_SX679_.jpg"
            rating={4}
          />
          <Product
            id="23445930"
            title="Developer Programming Stickers, Internet Software Stickers, Programmers Sticker Pack (50pcs), Waterproof Vinyl Sticker for Water Bottle, Mug, Luggage, Laptop, Engineers, Hackers, Geeks, Coders"
            price={8.58}
            image="https://m.media-amazon.com/images/I/71u7sS3KXDL._AC_SL1100_.jpg"
            rating={2}
          />
          <Product
            id="12321341"
            title="Google Pixel 6 - 5G Android Phone - Unlocked Smartphone with Wide and Ultrawide Lens - 128GB - Sorta Seafoam"
            price={499.99}
            image="https://m.media-amazon.com/images/I/71QQZr2pNSL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="SAMSUNG 65-Inch Class OLED 4K S95B Series Quantum HDR, Dolby Atmos, Object Tracking Sound, Laser Slim Design, Smart TV with Alexa Built-In (QN65S95BAFXZA, 2022 Model)"
            price={2197.99}
            image="https://m.media-amazon.com/images/I/81tmsk6LYiL._AC_SL1500_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
