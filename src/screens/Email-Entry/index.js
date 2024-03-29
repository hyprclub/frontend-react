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
  sendPasswordResetEmail,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const breadcrumbs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "BU Alumni Sign In",
  },
];

const Passwordless = () => {
  const loggedIn = useSelector((state) => state.UserData.loggedIn);
  const UserData = useSelector((state) => state.UserData);
  const [data, setData] = useState({ email: "", password: "" });
  function updateState(e) {
    setData((state) => ({ ...state, [e.target.name]: e.target.value }));
  }
  const [show, setShow] = useState(false);
  const [mailShow, setMailShow] = useState(false);
  const handleMailClose = () => setShow(true);
  const [error, setError] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async () => {
    const auth = getAuth();
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: window.location.href,
      // This must be true.
      handleCodeInApp: true,
    };
    try {
      await sendSignInLinkToEmail(auth, data.email, actionCodeSettings)
        .then((result) => {
          console.log(result);
          console.log(window.location.href);
          handleShow();
          setError("E-Mail Sent!");
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const { push } = useHistory();

  useEffect(() => {
    const auth = getAuth();

    if (isSignInWithEmailLink(auth, window.location.href)) {
      setMailShow(true);
    }
  }, []);

  const handleLogin = async () => {
    const auth = getAuth();
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email;

      if (!email) {
        // // User opened the link on a different device. To prevent session fixation
        // // attacks, ask the user to provide the associated email again. For example:
        // email = window.prompt("Please provide your email for confirmation");

        email = data.pemail;
        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            const db = getFirestore();
            const user = result.user;
            const uid = user.uid;
            if (user.exist()) {
              console.log("exists");
            } else {
              setDoc(doc(db, "users", uid), {
                Name: "",
                Emailid: "",
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
            }

            window.localStorage.removeItem("emailForSignIn");
          })
          .catch((error) => {
            if (error.code == "auth/invalid-email") {
              handleShow();
              setError("Email entered does not match");
            }
          });
      }
    }
  };

  useEffect(() => {
    console.log(UserData);
    if (loggedIn) {
      push("/");
    }
  }, [loggedIn, push]);

  return (
    <div className={styles.page}>
      <Control className={styles.control} item={breadcrumbs} />
      <div className={cn("section-pt80", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.top}>
            <h1 className={cn("h2", styles.title)}>BU Alumni Sign In</h1>
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
                    className={styles.field1}
                    id="validationCustom01"
                    value={data.email}
                    name="email"
                    label="Bennett Email Address"
                    type="email"
                    placeholder="Enter your Bennett Email Address"
                    required
                  />
                  {/* <div class="invalid-feedback">
										Please choose a username.
									</div> */}
                </div>
                <Button className={cn("button-stroke", styles.button)}>
                  <input type="submit" value="Claim NFT" />
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
                    <h2 className={styles.head1}>Notification</h2>
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
              <Modal
                show={mailShow}
                onHide={handleMailClose}
                backdrop="static"
                keyboard={false}
              >
                <div className={styles.border}>
                  <Modal.Header className={styles.mymodal}>
                    <Modal.Title>Enter Email</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className={styles.mymodal2}>
                    <TextInput
                      onChange={(e) => {
                        updateState(e);
                      }}
                      className={styles.field}
                      id="validationCustom01"
                      value={data.pemail}
                      name="pemail"
                      label="Please provide your bennett email for confirmation"
                      type="email"
                      placeholder="Enter your email"
                      required
                      autocomplete="true"
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      className={styles.mymodal}
                      variant="secondary"
                      onClick={handleLogin}
                    >
                      Login
                    </Button>
                    {/* <Button variant="primary">Understood</Button> */}
                  </Modal.Footer>
                </div>
              </Modal>
            </div>
          </div>
          <div className={styles.note}>
            We do not own your private keys and cannot access your funds without
            your confirmation. For any queries contact{" "}
            <b>
              <a
                target="_blank"
                href={
                  "https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=team@hyprclub.com"
                }
              >
                {" "}
                team@hyprclub.com
              </a>
            </b>
            {/* <Link to={}> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passwordless;
