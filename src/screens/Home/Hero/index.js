import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from "./Hero.module.sass";
import Icon from "../../../components/Icon";
import Player from "../../../components/Player";
import Modal from "../../../components/Modal";
import Connect from "../../../components/Connect";
import Bid from "../../../components/Bid";
// const items = [
//   {
//     title: "the creator network®",
//     creator: "Enrico Cole",
//     currency: "1.00 ETH",
//     price: "$3,618.36",
//     avatar: "/images/content/avatar-creator.jpg",
//     image: "/images/content/video-preview.jpg",
//     image2x: "/images/content/video-preview@2x.jpg",
//   },
//   {
//     title: "Marco carrillo®",
//     creator: "Enrico Cole",
//     currency: "2.00 ETH",
//     price: "$2,477.92",
//     avatar: "/images/content/avatar-creator.jpg",
//     image: "/images/content/video-preview.jpg",
//     image2x: "/images/content/video-preview@2x.jpg",
//   },
//   {
//     title: "the creator network®",
//     creator: "Enrico Cole",
//     currency: "1.00 ETH",
//     price: "$3,618.36",
//     avatar: "/images/content/avatar-creator.jpg",
//     image: "/images/content/video-preview.jpg",
//     image2x: "/images/content/video-preview@2x.jpg",
//   },
//   {
//     title: "Marco carrillo®",
//     creator: "Enrico Cole",
//     currency: "2.00 ETH",
//     price: "$2,477.92",
//     avatar: "/images/content/avatar-creator.jpg",
//     image: "/images/content/video-preview.jpg",
//     image2x: "/images/content/video-preview@2x.jpg",
//   },
// ];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
 <></>
  // <button {...props}>{children}</button>
);

const Hero = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
  };

  const [visibleModalBid, setVisibleModalBid] = useState(false);

  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.head}>
            <div className={cn("h1", styles.title)}>
            Welcome to HyprClub.<br></br> The next big social revolution.
            </div>
            <div className={styles.stage}>
            A platform for the creator, investor and <br></br>supporter inside you.
            </div>
            <Link className={cn("button-stroke", styles.button)} to="./signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <Modal
        visible={visibleModalBid}
        onClose={() => setVisibleModalBid(false)}
      >
        <Connect />
      </Modal>
    </>
  );
};

export default Hero;
