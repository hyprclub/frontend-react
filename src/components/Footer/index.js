import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Group from "./Group";
import Image from "../Image";
import Form from "../Form";
import Theme from "../Theme";
import { Button, Modal } from "react-bootstrap";
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
    title: "HyprClub",
    menu: [
      {
        title: "Discover",
        url: "/Discover",
      },
      {
        title: "Coming Soon",
        url: "/comingsoon",
      },
      {
        url: "/BuAlumni",
        title: "BU Alumni",
      },
    ],
  },
  {
    title: "Info",
    menu: [
      {
        title:"Contact Us",
        url:"/ContactUs"
      },
      {
        title: "FAQ",
        url: "/faq",
      },
      {
        title: "How it works",
        url: "/Howitworks",
      },
    ],
  },
];

const Footers = () => {
  const [email, setEmail] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    const db = getFirestore();
    await setDoc(doc(db, "Newsletter", email), {})
      .then((result) => {
        handleShow();
        setError("Thank You for Subscribing to our newsletter.");
      })
      .catch((err) => {
        console.error(err);
      });
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
                alt="HyprClub"
              />
            </Link>
            <div className={styles.info}>The Next Social Revolution.</div>
            <div className={styles.logo1}>
              <a
                className="icons"
                href="https://www.instagram.com/hyprclub/"
                target="_blank"
              >
                <img class="icons" src="/instagram.png" />
              </a>
              <a
                className="icons"
                href="https://www.facebook.com/hyprclub"
                target="_blank"
              >
                <img class="icons" src="/facebook.png" />
              </a>
              <a
                className="icons"
                href="https://www.linkedin.com/company/hyprclub/ "
                target="_blank"
              >
                <img class="icons" src="/linkedin.png" />
              </a>
              <a
                className="icons"
                href="https://twitter.com/hyprclub"
                target="_blank"
              >
                <img class="icons" src="/twitter.png" />
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
            © 2021 HyprClub, Made with ❤️ in India
          </div>
          {/* <div className={styles.copyright}>
            Terms and Conditions*
          </div> */}
          <div className={styles.copyright}>
            <a
              target="_blank"
              href="https://firebasestorage.googleapis.com/v0/b/hypr-development.appspot.com/o/Documents%2Ftermandcond%2Ftnc.pdf?alt=media&token=01abf26a-b4c8-402f-bf13-5caf74615250"
            >
              Terms and Conditions{" "}
            </a>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className={styles.mymodal}>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.mymodal2}>{error}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className={styles.mymodal}
            onClick={handleClose}
          >
            Close
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
    </footer>
  );
};

export default Footers;
