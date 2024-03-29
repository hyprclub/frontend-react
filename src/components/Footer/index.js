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
        url: "/coming-soon",
      },
    ],
  },
  {
    title: "Info",
    menu: [
      {
        title: "Contact Us",
        url: "/ContactUs",
      },
      {
        title: "FAQ",
        url: "/faq",
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
      .catch((err) => {});
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
                <img className={styles.imgss} src="/instagram.png" />
              </a>
              <a
                className="icons"
                href="https://www.facebook.com/hyprclub"
                target="_blank"
              >
                <img className={styles.imgss} src="/facebook.png" />
              </a>
              <a
                className="icons"
                href="https://www.linkedin.com/company/hyprclub/ "
                target="_blank"
              >
                <img className={styles.imgss} src="/linkedin.png" />
              </a>
              <a
                className="icons"
                href="https://twitter.com/hyprclub"
                target="_blank"
              >
                <img className={styles.imgss} src="/twitter.png" />
              </a>
            </div>
            <div className={styles.flex1}>
              <div className={styles.details}></div>
              <div className={styles.version}>
                <Theme setDark={true} className="theme-big" />
              </div>
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
              Subscribe our newsletter to get regular updates and exiting offers
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
              href="https://firebasestorage.googleapis.com/v0/b/hyprclub-7ebf6.appspot.com/o/Documents%2FTermsandCondition%2Ftnc.pdf?alt=media&token=348c43fd-e7a0-49ab-abb4-4c9bb6296f07"
            >
              Terms and Conditions{" "}
            </a>
            &nbsp;
            <a target="_blank" href="https://forms.gle/PK6ctGyYjoYPUDfx5">
              Report A Bug
            </a>
          </div>
        </div>
      </div>
      <Modal
        className={styles.modals}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-custom"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div className={styles.border}>
          <Modal.Header closeButton className={styles.titless}>
            {/* <Modal.Title>Notification</Modal.Title> */}
                <h2 className={styles.head2}>Notification</h2>
          </Modal.Header>
          <Modal.Body className={styles.mymodal2}>
            <>
                {/* <img className={cn("img-fluid", styles.size1)} src="/Error.png" /> */}
              <div>
                <div>{error}</div>
              </div>
            </>
          </Modal.Body>
          <Modal.Footer className={styles.footer}>
            <div className={styles.footer}>
              <Button
                className={styles.mymodal}
                variant="secondary"
                onClick={handleClose}
              >
                OK
              </Button>
            </div>
            {/* <Button variant="primary">Understood</Button> */}
          </Modal.Footer>
        </div>
      </Modal>
    </footer>
  );
};

export default Footers;
