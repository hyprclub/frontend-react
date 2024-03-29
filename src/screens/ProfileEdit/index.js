import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./ProfileEdit.module.sass";
import Control from "../../components/Control";
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";
import Icon from "../../components/Icon";
import { useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { firebaseApp } from "../../firebaseConfig";
import { useHistory } from "react-router-dom";
import {
  doc,
  updateDoc,
  getFirestore,
  getDocs,
  collection,
  where,
  query,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const breadcrumbs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Edit Profile",
  },
];

const ProfileEdit = () => {
  // const UserData = useSelector((state) => state.UserData)
  // const [socialState,setSocialState] = useState(socials)
  const [data, setData] = useState({
    name: "",
    email: "",
    username: "",
    phoneno: "",
    instagram: "",
    twitter: "",
    bio: "",
  });
  const UserData = useSelector((state) => state.UserData);
  const [image, setImage] = useState(null);
  const loggedIn = useSelector((state) => state.UserData.loggedIn);
  const { push } = useHistory();
  const [usernameStatus, setUsernameStatus] = useState(true);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  React.useEffect(() => {
    if (loggedIn) {
      push("/profile-edit");
    } else {
      push("/login");
    }
  }, [loggedIn, push]);

  function updateState(e) {
    setData((state) => ({ ...state, [e.target.name]: e.target.value }));
  }

  const checkUsername = async (ev) => {
    if (ev.target.value == "") {
      setUsernameStatus(true);
      handleShow();
      setError("Please Enter Username");
    }
    // else if(ev.target.value == data.username){
    //   setUsernameStatus(false)
    // }
    else {
      try {
        const db = getFirestore();
        const q = query(
          collection(db, "users"),
          where("Username", "==", ev.target.value)
        );
        const querySnapshot = await getDocs(q);
        if (querySnapshot.size === 0) {
          setUsernameStatus(false);
        } else {
          if (ev.target.value == data.username) {
            setUsernameStatus(false);
          } else {
            setUsernameStatus(true);
          }
        }
      } catch (error) {}
    }
  };

  const onImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      const storage = getStorage();

      const storagePFref = ref(
        storage,
        "users/" + UserData.uid + "/profile.jpg"
      );
      try {
        const uploadTask = await uploadBytesResumable(
          storagePFref,
          e.target.files[0]
        );
        handleShow();
        setError("Profile Image Updated");
        window?.location.reload();
      } catch (error) {}
    }
  };
  const updateUserProfile = async () => {
    try {
      const db = getFirestore();
      const phonevalid = "(0|91)?[7-9][0-9]{9}";
      if (data.phoneno?.match(phonevalid)) {
        const updateStatus = await updateDoc(doc(db, "users", UserData.uid), {
          Name: data.name,
          Emailid: data.email,
          Phone: data?.phoneno,
          Bio: data?.bio,
          Portfolio: data?.portfolio,
          Instagram: data?.instagram,
          Twitter: data?.twitter,
        });
        handleShow();
        setError("Profile Updated");
        window?.location.reload();
      } else {
        handleShow();
        setError("Please Enter a valid Phone Number");
      }
    } catch (error) {
      handleShow();
      setError("Some error Occured");
    }
  };

  useEffect(() => {
    if (UserData) {
      setData(UserData);
    }
  }, [UserData]);

  return (
    <div className={styles.page}>
      <Control className={styles.control} item={breadcrumbs} />
      <div className={cn("section-pt80", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.top}>
            <h1 className={cn("h2", styles.title)}>Edit profile</h1>
            <div className={styles.info}>
              You can set preferred display name, create{" "}
              <strong>your profile URL</strong> and manage other personal
              settings.
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.user}>
                <div className={styles.avatar}>
                  <img
                    src={
                      UserData.profileDP ||
                      "/images/content/avatar-big.jpg" || { image }
                    }
                    alt="Avatar"
                  />
                </div>
                <div className={styles.details}>
                  <div className={styles.stage}>Profile photo</div>
                  <div className={styles.text}>
                    We recommend an image of at least 400x400. Gifs work too{" "}
                    <span role="img" aria-label="hooray">
                      🙌
                    </span>
                  </div>
                  <div className={styles.file}>
                    <button
                      className={cn(
                        "button-stroke button-small",
                        styles.button
                      )}
                    >
                      Upload
                    </button>
                    <input
                      className={styles.load}
                      onChange={(e) => {
                        onImageChange(e);
                      }}
                      name="userdp"
                      type="file"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.category}>Account info</div>
                  <div className={styles.fieldset}>
                    <TextInput
                      onChange={(e) => {
                        updateState(e);
                      }}
                      className={styles.field}
                      defaultValue={data?.name}
                      label="Name"
                      name="name"
                      type="text"
                      placeholder="Enter your Name"
                      required
                    />
                    <TextInput
                      onChange={(e) => {
                        updateState(e);
                      }}
                      className={styles.field}
                      defaultValue={data?.email}
                      label="Email"
                      name="email"
                      type="text"
                      placeholder="Enter your Email Address"
                      disabled="true"
                      required
                    />
                    <TextInput
                      onChange={(e) => {
                        updateState(e);
                      }}
                      className={styles.field}
                      defaultValue={data?.phoneno}
                      label="Phone Number"
                      name="phoneno"
                      type="text"
                      placeholder="Enter your Phone Number"
                      required
                    />
                    <TextInput
                      onChange={(e) => {
                        updateState(e);
                        // checkUsername(e);
                      }}
                      // onBlur={(ev) => {
                      //   checkUsername(ev);
                      // }}
                      className={styles.field}
                      defaultValue={data?.username}
                      label="Username"
                      name="username"
                      disabled
                      type="text"
                      placeholder="Enter your username"
                      required
                    />
                    <TextArea
                      onChange={(e) => {
                        updateState(e);
                      }}
                      className={styles.field}
                      defaultValue={data?.bio}
                      label="Bio"
                      name="bio"
                      placeholder="About yourselt in a few words"
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.category}>Social</div>
                  <div className={styles.fieldset}>
                    <TextInput
                      onChange={(e) => {
                        updateState(e);
                      }}
                      className={styles.field}
                      defaultValue={data?.portfolio}
                      label="Portfolio or website"
                      name="portfolio"
                      type="text"
                      placeholder="Enter URL"
                    />
                    <div className={styles.box}>
                      <TextInput
                        onChange={(e) => {
                          updateState(e);
                        }}
                        className={styles.field}
                        defaultValue={data?.instagram}
                        label="Instagram Username"
                        name="instagram"
                        type="text"
                        placeholder="Enter your Instagram Username"
                      />
                      <div> </div>
                      <TextInput
                        onChange={(e) => {
                          updateState(e);
                        }}
                        className={(styles.field, styles.field2)}
                        defaultValue={data?.twitter}
                        label="Twitter Username"
                        name="twitter"
                        type="text"
                        placeholder="Enter your Twitter Username"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.note}>
                To update your settings you should sign message through your
                wallet. Click 'Update profile' then sign the message
              </div>
              <div className={styles.btns}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    // checkUsername(e);
                    updateUserProfile();
                  }}
                  className={cn("button", styles.button)}
                >
                  Update Profile
                </button>
                {/* <button 
                onClick={(e) =>{
                  clearText(e)
                }}
                className={styles.clear}>
                  <Icon name="circle-close" size="24" />
                  Clear all
                </button> */}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileEdit;
