import React from "react";
import Hero from "./Hero";
import Selection from "./Selection";
import Popular from "./Popular";
import HotBid from "../../components/HotBid";
import Collections from "./Collections";
import Discover from "./Discover";
import Description from "./Description";
import cn from "classnames";
import styles from "./Home.module.sass";
const Home = () => {
  return (
    <>
      <div className={styles.back}>
        <Hero />
        {/* <div>hello</div> */}
        <Selection />
        {/* <Popular /> */}
        {/* <HotBid classSection="section" /> */}
        {/* <Collections /> */}
        <Discover />
        {/* <Description /> */}
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className={styles.h1}>Unique NFTs for our unique BU Alumni.</div>
              <div>
                <div className={styles.h2}>Some placeholder text jo waha bhi dala tha. pls saksham soch lo kuchh. huihuihui Lorem ipsum dolor sit amet. dogs are cooler than cats.</div>
                <div className={styles.center}>
                <button
                  className={cn("button-stroke button-small", styles.button)}>
                  <span>Learn More</span>
                </button>
                </div>
              </div>
              {/* </div> */}
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
            <img className="img-fluid" src="/homepage.png" srcDark="/homepage.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
