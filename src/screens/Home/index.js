import React from "react";
import Hero from "./Hero";
import Selection from "./Selection";
import Popular from "./Popular";
import HotBid from "../../components/HotBid";
import Collections from "./Collections";
import Discover from "./Discover";
import { Link } from "react-router-dom";
import Description from "./Description";
import cn from "classnames";
import styles from "./Home.module.sass";
import Image from "./Image";
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
              <div className={styles.h1}>
                Bennett University presents the World's First Alumni NFTs.
              </div>
              <div>
                <div className={styles.h2}>
                  HyprClub, in collaboration with Bennett University (Times of
                  India Group) has developed the World's First NFTs in an
                  academic space, specifically, Alumni Relations.
                </div>
                <div className={styles.center}>
                  <Link
                    className={cn("button-small", styles.button)}
                    to="/BuAlumni"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              {/* </div> */}
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <Image
                className="img-fluid"
                src="/homepage.png"
                srcDark="/darkmode.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
