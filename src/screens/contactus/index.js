import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./contactUs.module.sass";
import Control from "../../components/Control";
import TextInput from "../../components/TextInput";
import { Button, Modal } from "react-bootstrap";
// import { firebaseApp } from '../../firebaseConfig'

import { doc, setDoc, getFirestore } from "firebase/firestore";
import { useSelector } from "react-redux";

const breadcrumbs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Contact Us",
  },
];
const ContactUs = () => {
  const [data, setData] = useState({
    email: "",
    message: "",
    name: "",
    phone: "",
  });
  function updateState(e) {
    setData((state) => ({ ...state, [e.target.name]: e.target.value }));
  }
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [phonenumStatus, setPhonenumStatus] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkPhonenum = (ev) => {
    if (ev.target.value == "") {
      setPhonenumStatus(true);
      handleShow();
      setError("Please Enter Phone Number");
    } else {
      const phoneValidString = "(0|91)?[7-9][0-9]{9}";
      if (ev.target.value.match(phoneValidString)) {
        setPhonenumStatus(false);
      } else {
        setPhonenumStatus(true);
      }
    }
  };

  const handleSubmit = async () => {
    const db = getFirestore();
    if (phonenumStatus == true) {
      handleShow();
      setError("Enter Valid Phone Number");
    } else {
      try {
        const userData = await setDoc(doc(db, "ContactUs", data.email), {
          Name: data.name,
          Emailid: data.email,
          Phone: data.phone,
          Message: data.message,
        });
        handleShow();
        setError(
          "Your message was successfully sent. It may take up to three business days for us to reply."
        );
      } catch (err) {
        setError("Something went wrong. Please Try Again Later.");
        handleShow();
      }
    }
  };

  return (
    <>
      <div className={styles.page}>
        <Control className={styles.control} item={breadcrumbs} />
        <div className={cn("section-pt80", styles.section)}>
          <div className={cn("container-fluid", styles.container)}>
            <div className={styles.top}>
              <h1 className={cn("h2", styles.title)}>Get in Touch With Us</h1>
              We’ll try and get back to you as soon as possible!
              {/* <div className={styles.info}> */}
              {/* sell one collectible multiple times */}
              {/* </div> */}
            </div>
            {/* <div className="row"> */}
            <div className={styles.item}>
              <div className={styles.ks}>
                <form
                  className="needs-validation"
                  novalidate
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div>
                        <TextInput
                          onChange={(e) => {
                            updateState(e);
                          }}
                          className={styles.field}
                          value={data.name}
                          id="validationCustomUsername"
                          value={data.name}
                          label="Your Name"
                          name="name"
                          type="text"
                          placeholder="Enter your Full Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div>
                        <TextInput
                          onChange={(e) => {
                            updateState(e);
                          }}
                          onBlur={(ev) => {
                            checkPhonenum(ev);
                          }}
                          className={styles.field}
                          label="Phone Number"
                          value={data.phone}
                          name="phone"
                          id="validationCustom04"
                          type="text"
                          placeholder="Enter your Phone number"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12">
                      <div>
                        <TextInput
                          onChange={(e) => {
                            updateState(e);
                          }}
                          className={styles.field1}
                          label="Email Address"
                          value={data.email}
                          name="email"
                          type="email"
                          id="validationCustom03"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                    <div
                      className={cn(
                        "col-xl-12 col-lg-12 col-md-12",
                        styles.size
                      )}
                    >
                      <div>
                        <div className={styles.labels}>Your Message:</div>
                        <textarea
                          className={styles.field3}
                          onChange={(e) => {
                            updateState(e);
                          }}
                          id="validationCustom06"
                          name="message"
                          value={data.message}
                          type="textarea"
                          placeholder="Enter Your Message"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <Button className={cn("button-stroke", styles.button, "btn")}>
                    <input type="submit" value="Send Message" />
                  </Button>
                  <div className={styles.text}>
                    You can also reach out to us through our social media
                    handles.
                  </div>
                  <div className={styles.space}>
                    <a
                      // className="icons"
                      href="https://www.instagram.com/hyprclub/"
                      target="_blank"
                    >
                      <img className={styles.imgss} src="/instagram.png" />
                    </a>
                    <a
                      // className="icons"
                      href="https://www.facebook.com/hyprclub"
                      target="_blank"
                    >
                      <img className={styles.imgss}  src="/facebook.png" />
                    </a>
                    <a
                      className="icons"
                      href="https://www.linkedin.com/company/hyprclub/ "
                      target="_blank"
                    >
                      <img className={styles.imgss}  src="/linkedin.png" />
                    </a>
                    <a
                      className="icons"
                      href="https://twitter.com/hyprclub"
                      target="_blank"
                    >
                      <img className={styles.imgss}  src="/twitter.png" />
                    </a>
                    <Modal
                      className={styles.modals}
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={show}
                      onHide={handleClose}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header closeButton className={styles.title}>
                        <Modal.Title>Error</Modal.Title>
                      </Modal.Header>
                      <Modal.Body className={styles.mymodal2}>
                        <div>
                          <img
                            className={cn("img-fluid", styles.size1)}
                            src="/Error.png"
                          />
                        </div>
                        <div className={styles.fit}>{error}</div>
                      </Modal.Body>
                      <Modal.Footer className={styles.footer}>
                        <div className={styles.footer}>
                          <Button
                            className={styles.mymodal}
                            variant="secondary"
                            onClick={handleClose}
                          >
                            Ok
                          </Button>
                        </div>
                        {/* <Button variant="primary">Understood</Button> */}
                      </Modal.Footer>
                    </Modal>
                  </div>
                </form>
              </div>
            </div>
            <div className={styles.note}>
              Still got some questions? Check out our FAQ Page
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
