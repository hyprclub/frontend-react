import React, { useState } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Users from "./Users";
import Control from "./Control";
import Options from "./Options";

const navLinks = ["Info", "Owners"];

const categories = [
  {
    category: "black",
    content: "art",
  },
  {
    category: "purple",
    content: "unlockable",
  },
];

const users = [
  {
    name: "Bennett university",
    position: "Owner",
    avatar: "/images/content/2.png",
    // reward: "/images/content/2.png",
  },
  {
    name: "Hypr Club",
    position: "Creator",
    avatar: "/images/content/1.png",
  },
];

const Item = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.bg}>
            <div className={styles.preview}>
              <div className={styles.categories}>
                {categories.map((x, index) => (
                  <div
                    className={cn(
                      { "status-black": x.category === "black" },
                      { "status-purple": x.category === "purple" },
                      styles.category
                    )}
                    key={index}
                  >
                    {x.content}
                  </div>
                ))}
              </div>
              <img
                srcSet="/images/content/item-pic@2x.jpg 2x"
                src="/images/content/item-pic.jpg"
                alt="Item"
              />
            </div>
            {/* <Options className={styles.options} /> */}
          </div>
          <div className={styles.details}>
            <h1 className={cn("h3", styles.title)}>The amazing art</h1>
            <div className={styles.cost}>
              <div className={cn("status-stroke-green", styles.price)}>
                1000 INR
              </div>
              {/* <div className={cn("status-stroke-black", styles.price)}>
                $4,429.87
              </div> */}
              <div className={styles.counter}>100 in stock</div>
            </div>
            <div className={styles.info}>
              This NFT Card will give you Access to Special Airdrops. To learn
              more about UI8 please visit{" "}
              <a
                href="https://ui8.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ui8.net
              </a>
            </div>
            <div className={styles.nav}>
              {navLinks.map((x, index) => (
                <button
                  className={cn(
                    { [styles.active]: index === activeIndex },
                    styles.link
                  )}
                  onClick={() => setActiveIndex(index)}
                  key={index}
                >
                  {x}
                </button>
              ))}
            </div>
            <Users className={styles.users} items={users} />
            <div className={styles.buttonFlex}>
              <div className={styles.button1}><a class="button-small Header_button__2u-UY" href="/upload-variants">Claim Now</a></div>
              <div className={styles.button1}><a class="button-small Header_button__2u-UY" href="/upload-variants">Certificate</a></div>
            </div>
            {/* <Control className={styles.control} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
