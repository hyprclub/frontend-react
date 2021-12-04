import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Login.module.sass";
import Control from "../../components/Control";
import TextInput from "../../components/TextInput";
import { useHistory } from "react-router";

import { firebaseApp } from "../../firebaseConfig";
import { Button, Modal } from "react-bootstrap";

import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { useSelector } from "react-redux";

const breadcrumbs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Login",
  },
];

const Login = () => {
  const loggedIn = useSelector((state) => state.UserData.loggedIn);
  const UserData = useSelector((state) => state.UserData);
  const [data, setData] = useState({ email: "", password: "" });
  function updateState(e) {
    setData((state) => ({ ...state, [e.target.name]: e.target.value }));
  }
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const googlesignin = async () => {
    const db = getFirestore();

    try {
      const googleprovider = new GoogleAuthProvider();
      const auth = getAuth();
      const google = await signInWithPopup(auth, googleprovider);
      const credential = GoogleAuthProvider.credentialFromResult(google);
      const user = google.user;
      const email = user.email;
      const name = user.displayName;
      const uid = user.uid;

      setDoc(doc(db, "users", uid), {
        Name: name,
        Emailid: email,
        Phone: "",
        Username: email,
        UserID: uid,
        admin: false,
        creator: false,
        Bio: "",
        Instagram: "",
        Portfolio: "",
        Twitter: "",
      });
    } catch (error) {
      if ((error.code = "auth/popup-closed-by-user")) {
        handleShow();
        setError("Log-In Cancelled");
      }
    }
  };
  const forgotpassword = async () => {
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, data.email).then((result) => {
        handleShow();
        setError("E-Mail Sent!");
      });
    } catch (error) {
      if (error.code == "auth/missing-email") {
        handleShow();
        setError("Please Enter Email Address");
      } else {
        handleShow();
        setError("Some Error Occured");
      }
    }
  };
  const handleSubmit = async () => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;
      const emailVerified = user.emailVerified;
    } catch (err) {
      setError("Invalid Credential");
      handleShow();
    }
  };
  const { push } = useHistory();

  useEffect(() => {
    if (loggedIn) {
      push("/profile");
    }
  }, [loggedIn, push]);

  return (
    <div className={styles.page}>
      <Control className={styles.control} item={breadcrumbs} />
      <div className={cn("section-pt80", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.top}>
            <h1 className={cn("h2", styles.title)}>Login</h1>
            Become a part of the social revolution.
          </div>
          <div className={styles.list}>
            <div className={styles.item}>
              <form
                className="needs-validation"
                novalidate
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                {/* <label for="validationCustom01">First name</label> */}
                <div>
                  <TextInput
                    onChange={(e) => {
                      updateState(e);
                    }}
                    className={styles.field}
                    id="validationCustom01"
                    value={data.email}
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                  {/* <div class="invalid-feedback">
										Please choose a username.
									</div> */}
                </div>
                <TextInput
                  onChange={(e) => {
                    updateState(e);
                  }}
                  className={styles.field}
                  id="validationCustom02"
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
                <a
                  className={cn(styles.link)}
                  onClick={(e) => {
                    forgotpassword(e);
                  }}
                >
                  Forgot Password?
                </a>
                <Button
                  className={cn("button-stroke", styles.button, styles.button3)}
                >
                  <input type="submit" value="    Login   " />
                </Button>
                {/* <Link
										onClick={(e) => {
											e.preventDefault()
										}}
										to={'#'}
									>
										Login
									</Link> */}
                {/* </input> */}
              </form>

              <Button className={cn("button-stroke", styles.button)}>
                <div>
                  &ensp;&ensp; <img class="icons mr-3" src="/google.png" />{" "}
                  <button
                    className={styles.button2}
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      googlesignin(e);
                    }}
                  >
                    Sign up with Google&ensp;&ensp;
                  </button>
                </div>
              </Button>
              <div></div>

              <Button className={cn("button-stroke", styles.button)}>
                <div>
                  <button
                    className={styles.button2}
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      push("/passwordless");
                    }}
                  >
                    &ensp;&ensp; BU Alumni Sign In&ensp;&ensp;
                  </button>
                </div>
              </Button>
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
                  </Modal.Header>
                  <Modal.Body className={styles.mymodal2}>
                    <>
                      <img
                        className={cn("img-fluid", styles.size1)}
                        src="/Error.png"
                      />
                      <div className={styles.innerHead}>
                        <h2 className={styles.head}>Notification</h2>
                        <div className={styles.fit}>{error}</div>
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
                  </Modal.Header>
                  <Modal.Body className={styles.mymodal2}>
                    <>
                      <img
                        className={cn("img-fluid", styles.size1)}
                        src="/Error.png"
                      />
                      <div className={styles.innerHead}>
                        <h2 className={styles.head}>Notification</h2>
                        <div className={styles.fit}>{error}</div>
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
            </div>
          </div>
          <div className={styles.note}>
            We do not own your private keys and cannot access your funds without
            your confirmation.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
