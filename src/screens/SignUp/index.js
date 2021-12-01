import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./Signup.module.sass";
import Control from "../../components/Control";
import TextInput from "../../components/TextInput";
import { Button, Modal } from "react-bootstrap";
// import { firebaseApp } from '../../firebaseConfig'
import { useHistory } from "react-router";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import {
  doc,
  updateDoc,
  setDoc,
  getFirestore,
  getDocs,
  collection,
  where,
  query,
} from "firebase/firestore";
import { useSelector } from "react-redux";

const breadcrumbs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Signup",
  },
];
const Signup = () => {
  const loggedIn = useSelector((state) => state.UserData.loggedIn);
  const UserData = useSelector((state) => state.UserData);
  const [data, setData] = useState({
    email: "",
    password: "",
    cpassword: "",
    name: "",
    username: "",
    phone: "",
  });
  function updateState(e) {
    setData((state) => ({ ...state, [e.target.name]: e.target.value }));
  }
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [usernameStatus, setUsernameStatus] = useState(true);
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

  const checkUsername = async (ev) => {
    if (ev.target.value == "") {
      setUsernameStatus(false);
      handleShow();
      setError("Please Enter Username");
    } else {
      try {
        const db = getFirestore();
        const q = query(
          collection(db, "users"),
          where("Username", "==", ev.target.value)
        );
        const querySnapshot = await getDocs(q);
        if (querySnapshot.size != 0) {
          setUsernameStatus(true);
        } else {
          setUsernameStatus(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmit = async () => {
    const auth = getAuth();
    const db = getFirestore();
    const phonevalid = "(0|91)?[7-9][0-9]{9}";

    if (data.password != data.cpassword) {
      console.error("password do not match");
      // handleShow
      // if((data.phoneno).match(phonevalid)){

      handleShow();
      setError("Password do not match");
    } else if (phonenumStatus == true) {
      setError("Invalid Phone Number");
      handleShow();
    } else if (
      data.phone == "" ||
      data.email == "" ||
      data.username == "" ||
      data.name == "" ||
      data.cpassword == ""
    ) {
      console.error("Some error Occured");
      setError("Some error Occured");
      handleShow();
    } else if (usernameStatus == true) {
      setError("Please use different Username");
      handleShow();
    } else {
      try {
        // const q = query(collection(db, "users"), where("Username", "==", ev.target.value));
        // const querySnapshot = await getDocs(q);
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        const user = userCredential.user;
        const emailVerified = user.emailVerified;
        const uid = user.uid;
        // const nftData = await setDoc(doc(db, "users", "NFT", "JSON"), {
        //   json: "",
        // });

        const userData = await setDoc(doc(db, "users", uid), {
          Name: data.name,
          Emailid: data.email,
          Phone: data.phone,
          Username: data.username,
          UserID: uid,
          admin: false,
          creator: false,
          Bio: "",
          Instagram: "",
          Portfolio: "",
          Twitter: "",
        });
        console.log({ data, userCredential });
      } catch (err) {
        console.error(err.code, err, "failed");

        if (err.code == "auth/invalid-email") {
          console.error("Please Enter a valid Email");
          setError("Please Enter a valid Email");
          handleShow();
        }
        if (err.code == "auth/email-already-in-use") {
          console.error("Account Exists");
          setError("Account Exists");
          handleShow();
        }
        if (err.code == "auth/invalid-password") {
          console.error("Password must be atleast 6 characters");
          setError("Password must be atleast 6 characters");
          handleShow();
        }
        if (err.code == "auth/weak-password") {
          console.error("Please choose a Strong Password");
          setError("Please choose a Strong Password");
          handleShow();
        }
        setError("Something went wrong");
        handleShow();
      }
    }
  };
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
        Emailid: email,
        Name: name,
        UserID: uid,
        Username: email,
        admin: false,
        creator: false,
      });
    } catch (error) {
      if ((error.code = "auth/popup-closed-by-user")) {
        handleShow();
        setError("Log-In Cancelled");
      }
      console.log(error.code);
    }
  };

  const { push } = useHistory();
  useEffect(() => {
    const auth = getAuth();
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        email = window.prompt("Please provide your email for confirmation");
        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            const db = getFirestore();
            const user = result.user;
            const uid = user.uid;
            window.localStorage.removeItem("emailForSignIn");

            setDoc(doc(db, "users", uid), {
              Name: data.name,
              Emailid: data.email,
              Phone: data.phone,
              Username: data.username,
              UserID: uid,
              admin: false,
              creator: false,
              Bio: "",
              Instagram: "",
              Portfolio: "",
              Twitter: "",
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }, []);

  // useEffect(() => {
  //   console.log(UserData);
  //   if (loggedIn) {
  //     push("/");
  //   }
  // }, [loggedIn, push]);

  return (
    <>
      <div className={styles.page}>
        <Control className={styles.control} item={breadcrumbs} />
        <div className={cn("section-pt80", styles.section)}>
          <div className={cn("container-fluid", styles.container)}>
            <div className={styles.top}>
              <h1 className={cn("h2", styles.title)}>Create an Account</h1>
              Become a part of the social revolution.
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
                          onBlur={(ev) => {
                            if (ev.target.value == "") {
                              console.log("Please Enter Your Name");
                            }
                          }}
                          className={styles.field}
                          value={data.name}
                          id="validationCustomUsername"
                          label="Name"
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
                            checkUsername(ev);
                          }}
                          className={styles.field}
                          label="User Name"
                          id="validationCustom02"
                          name="username"
                          type="text"
                          placeholder="Enter your Username"
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
                            if (ev.target.value == "") {
                              console.log("Please Enter Email Address");
                            }
                          }}
                          className={styles.field}
                          label="Email Address"
                          name="email"
                          type="email"
                          id="validationCustom03"
                          placeholder="Enter your email"
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
                          name="phone"
                          id="validationCustom04"
                          type="text"
                          placeholder="Enter your Phone number"
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
                            if (ev.target.value == "") {
                              console.log("Password can't be Empty");
                            }
                          }}
                          className={styles.field}
                          label="Password"
                          name="password"
                          type="password"
                          id="validationCustom05"
                          placeholder="Enter your password"
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
                            if (ev.target.value == "") {
                              console.log("Please Re-Enter Password");
                            }
                          }}
                          className={styles.field}
                          label="Confirm Password"
                          name="cpassword"
                          id="validationCustom06"
                          type="password"
                          placeholder="Re-Enter your password"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <Button className={cn("button-stroke", styles.button, "btn")}>
                    <input type="submit" value="Sign Up" />
                  </Button>
                  <Modal
                  
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton className={styles.mymodal}>
                      <Modal.Title>Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={styles.mymodal2}>
                      <div><img className={cn("img-fluid",styles.size1)} src="/Error.png" /></div>
                      <div className={styles.fit}>{error}</div></Modal.Body>
                    <Modal.Footer>
                      <Button
                        className={styles.mymodal}
                        variant="secondary"
                        onClick={handleClose}
                      >
                        Ok
                      </Button>
                      {/* <Button variant="primary">Understood</Button> */}
                    </Modal.Footer>
                  </Modal>
                </form>
              </div>
              <div className={cn("button-stroke", styles.button)}>
                {" "}
                <img className="icons mr-3" src="/google.png" />{" "}
                <button
                  className={styles.button2}
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    googlesignin(e);
                  }}
                >
                  Sign up with Google
                </button>
              </div>

              {/* </div> */}
            </div>
            <div className={styles.note}>
              We do not own your private keys and cannot access your funds
              without your confirmation.
            </div>
          </div>
        </div>
      </div>
      {/* <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button> */}

      {/* <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal> */}
    </>
  );
};
export default Signup;
