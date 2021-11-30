import React from "react";
import Hero from "./Hero";
import Selection from "./Selection";
import Popular from "./Popular";
import HotBid from "../../components/HotBid";
import Collections from "./Collections";
import Discover from "./Discover";
import Description from "./Description";
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
      </div>
    </>
  );
};

export default Home;
