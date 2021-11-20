import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Group from "./Group";
import Image from "../Image";
import Form from "../Form";
import Theme from "../Theme";
import {
  getFirestore,
  setDoc,
  getDocs,
  doc,
  collection,
  getDoc,
} from "firebase/firestore";

const items = [
  {
    title: "Hypr",
    menu: [
      {
        title: "Marketplace",
        url: "/search01",
      },
      {
        title: "Drops",
        url: "/connect-wallet",
      },
    ],
  },
  {
    title: "Info",
    menu: [
      {
        title: "FAQ",
        url: "/faq",
      },
      {
        title: "About Us",
        url: "/upload-variants",
      },
    ],
  },
];

const Footers = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    console.log(email);
  };

  return (
    <footer className={`${styles.footer} dark`}>
      <div className={cn("container", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Link className={styles.logo} to="/">
              <Image
                className={styles.pic}
                src="/images/logo-dark.png"
                srcDark="/images/logo-light.png"
                alt="Fitness Pro"
              />
            </Link>
            <div className={styles.info}>The Next social Revolution.</div>
            <div className={styles.logo1}>
              <a
                className="icons"
                href="https://www.instagram.com/hyprclub/"
                target="_blank"
              >
                <img class="icons" src="/instagram.png" />{" "}
              </a>
              <a
                className="icons"
                href="https://www.facebook.com/hyprclub"
                target="_blank"
              >
                <img class="icons" src="/facebook.png" />{" "}
              </a>
              <a
                className="icons"
                href="https://www.linkedin.com/company/hyprclub/ "
                target="_blank"
              >
                <img class="icons" src="/linkedin.png" />{" "}
              </a>
              <a
                className="icons"
                href="https://twitter.com/hyprclub"
                target="_blank"
              >
                <img class="icons" src="/twitter.png" />{" "}
              </a>
            </div>
            <div className={styles.details}>Dark theme</div>
            <div className={styles.version}>
              <Theme setDark={true} className="theme-big" />
            </div>
          </div>
          <div className={styles.col}>
            {items.map((x, index) => (
              <Group className={styles.group} item={x} key={index} />
            ))}
          </div>
          <div className={styles.col}>
            <div className={styles.category}>Join Newsletter</div>
            <div className={styles.text}>
              Subscribe our newsletter to get more free design course and
              resource
            </div>
            <Form
              className={styles.form}
              value={email}
              setValue={setEmail}
              onSubmit={(e) => {
                handleSubmit();
                e.preventDefault();
              }}
              placeholder="Enter your email"
              type="email"
              name="email"
            />
          </div>
        </div>
        <div className={styles.foot}>
          <div className={styles.copyright}>
            © 2021 HyprClub, Made with ❤️in India
          </div>
          {/* <div className={styles.note}>
						We use cookies for better service. <a href='/#'>Accept</a>
					</div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footers;
