import React, { useState } from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
import Dropdown from "../../../components/Dropdown";
import Icon from "../../../components/Icon";
import Item from "./Item";

const items = [
  {
    title: "General",
    icon: "home",
    items: [
      {
        question: "What is HyprClub?",
        answer:
          "HyprClub is the next social revolution! We are a platform for the creator, investor, supporter & collector inside you. By utilizing technologies like Blockchain, we aim to create sustainability among creators without reliance, be it brands, or advertisements, or the platform itself. While making recognizable changes within the creative ecosystem, we are also trying to make this technology accessible to all in a simplified & secure way.",
      },
      {
        question: "What is an NFT?",
        answer:
          "A Non-Fungible Token, or NFT is a unique, digital certificate that works on a technology known as blockchain. It is stored on a blockchain to provide certain ownership rights of a digital asset space. They are described as 'non-fungible' as each one of them is unique and of different value.",
      },
      {
        question:
          "I don’t have a lot of knowledge about cryptocurrency, can I still sell my NFTs?",
        answer:
          "Of course you can! Here at Hypr Club, we make the process as easy as buying and selling on Amazon. ",
      },
    ],
  },
  {
    title: "Creators",
    icon: "circle-and-square",
    items: [
      {
        question: "As a creator, what services can I offer to my audience?",
        answer:
          "Through HyprClub, you can offer memberships, open your online store, and create your own NFTs with unique perks. You can also post photos, text and videos and interact with your audience.",
      },
      {
        question: "What can I mint as an NFT?",
        answer:
          "You can mint any digital asset as an NFT. Here at Hypr Club, you can sell your art, photographs, music, videos and even tweets as an NFT!",
      },
      {
        question:
          "Do I need to have a certain number of followers to become a creator on HyprClub?",
        answer:
          "Absolutely not! You can start creating your own NFTs at any stage of your career. ",
      },
      {
        question: "How much does HyprClub charge for accessing all features?",
        answer:
          "HyprClub believes in the concept of collaborative growth and is a free to use platform. We only make money when you do. We charge one of the industries lowest platform fees of 15% on all payments you receive. ",
      },
      {
        question: "When can I withdraw my payments?",
        answer:
          "You will receive monthly payouts after crossing a particular threshold of 5000 INR. ",
      },
    ],
  },
  {
    title: "Payments",
    icon: "pen",
    items: [
      {
        question: "Are my payments secured?",
        answer:
          "Our payments are completely secure and carried out through Razorpay.",
      },
      {
        question: "What mediums can I use to make payments?",
        answer:
          "Our payments are completely secure and carried out through Razorpay.",
      },
      {
        question: "Can I resell my NFT on another platform?",
        answer:
          "Sure you can! Once you purchase your NFT, through our platform you can sell your NFT through any other wallet like Metamask, Trust Wallet, etc. ",
      },
      {
        question: "Can I get a refund on my purchase?",
        answer:
          "Unfortunately, no. All purchases made on the platform are final and non-refundable.",
      },
    ],
  },
];

const Hero = () => {
  const options = [];
  items.map((x) => options.push(x.title));

  const [direction, setDirection] = useState(options[0]);

  return (
    <div className={""}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <h1 className={cn("h2", styles.title)}>Frequently asked questions</h1>
          <Dropdown
            className={cn("mobile-show", styles.dropdown)}
            value={direction}
            setValue={setDirection}
            options={options}
          />
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.nav}>
              {items.map((x, index) => (
                <div
                  className={cn(styles.link, {
                    [styles.active]: x.title === direction,
                  })}
                  onClick={() => setDirection(x.title)}
                  key={index}
                >
                  <Icon name={x.icon} size="16" />
                  <span>{x.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.col}>
            {items
              .find((x) => x.title === direction)
              .items.map((x, index) => (
                <Item className={styles.item} item={x} key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
