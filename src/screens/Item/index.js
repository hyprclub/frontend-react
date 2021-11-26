import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Users from "./Users";
import Control from "./Control";
import Options from "./Options";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { getDoc, doc, getFirestore } from "@firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import axios from "axios";

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



const Item = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { push } = useHistory();

  const loggedIn = useSelector((state) => state.UserData.loggedIn);

  
  const [data, setData] = useState({ name: "", image: "", description: "" });
  const [owner,setOwner] = useState("")
  const [ownerDp,setOwnerDp] = useState("")



  React.useEffect(async () => {
    if (props) {
      const nftToken = new URLSearchParams(props?.location?.search).get(
        "idToken"
      );
      console.debug({ nftToken });
      try {
        const db = getFirestore();
        const storage = getStorage();
        const nftData = await getDoc(doc(db, "NFT's", nftToken));
        console.debug(nftData);
        axios
          .get(nftData.data().json)
          .then(async (reps) => {
                const storagePFref = ref(storage, "users/" + nftData.data().OwnerUid + "/profile.jpg");
                const ownerData = await getDoc(doc(db,"users",nftData.data().OwnerUid));
                await getDownloadURL(ref(storagePFref)).then((url)=>{
                  setOwnerDp(url);
                }).catch((error) =>{
                  console.error(error);
                })
                setOwner(ownerData.data());
                setData(reps.data);
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.error(error);
      }
    }
  }, [props, setData, setOwner,setOwnerDp]);

   React.useEffect(() => {
    if (loggedIn !== undefined && loggedIn) {
    } else {
      push("/login");
    }
  }, [loggedIn, push]);

  React.useEffect(()=>{
    console.log({owner})
  },[owner])

  const users = [
    {
      name: owner?.Name,
      position: "Owner",
      avatar: ownerDp  || "/images/content/avatar-big.jpg",
    },
    {
      name: "Hypr Club",
      position: "Creator",
      avatar: "/images/content/1.png",
    },
  ];

  

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
              <img srcSet={`${data.image} 2x`} src={data.image} alt="Item" />
            </div>
            {/* <Options className={styles.options} /> */}
          </div>
          <div className={styles.details}>
            <h1 className={cn("h3", styles.title)}>{data.name}</h1>
            <div className={styles.cost}>
              <div className={cn("status-stroke-green", styles.price)}>
                1000 INR
              </div>
              {/* <div className={cn("status-stroke-black", styles.price)}>
                $4,429.87
              </div> */}
              <div className={styles.counter}>100 in stock</div>
            </div>
            <div className={styles.info}>{data.description}</div>
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
              <div className={styles.button1}>
                <a className="button-small" href="/upload-variants">
                  Claim Now
                </a>
              </div>
              <div className={styles.button1}>
                <a className="button-small" href="/upload-variants">
                  Certificate
                </a>
              </div>
            </div>
            {/* <Control className={styles.control} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
