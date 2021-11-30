import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Card.module.sass";
import Icon from "../Icon";
import { useHistory } from "react-router-dom";

import axios from "axios";
import {
  getDoc,
  doc,
  where,
  getDocs,
  collection,
  getFirestore,
  query,
} from "firebase/firestore";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const Card = ({ className, item: itemFromProps }) => {
  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState({});
  const { push } = useHistory();

  React.useEffect(() => {
    const run = async () => {
      try {
        const db = getFirestore();
        const storage = getStorage();
        if (itemFromProps) {
          console.log({ itemFromProps });
          const docsnap = await getDoc(doc(db, "NFT's", itemFromProps));

          if (docsnap.exists()) {
            axios
              .get(docsnap.data().json)
              .then((resps) => {
                console.log(resps.data);
                setItem(resps.data);
              })
              .catch((error) => {
                console.error({ error });
              });
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    run();
  }, [setItem, itemFromProps]);

  const openItem = async (e) => {
    if (itemFromProps) {
      push("/item?idToken=" + itemFromProps);
    }
  };

  return (
    <div className={cn(styles.card, className)}>
      <div className={styles.preview}>
        <div>
          <img
            onClick={(e) => {
              openItem(e);
            }}
            className={cn(styles.imagehover, "img-fluid")}
            srcSet={`${item.image || "/images/card.gif"} `}
            src={item.image || "/images/card.gif"}
            alt="Card"
          />
        </div>
        <div className={styles.control}>
          <div
            className={cn(
              { "status-green": item.category === "green" },
              styles.category
            )}
          >
            {item.categoryText}
          </div>
          {/* <button
            className={cn(styles.favorite, { [styles.active]: visible })}
            onClick={() => setVisible(!visible)}
          >
            <Icon name="heart" size="20" />
          </button> */}
          <button
            onClick={(e) => {
              openItem(e);
            }}
            className={cn("button-small", styles.button)}
          >
            <span>Claim NFT</span>
            <Icon name="scatter-up" size="16" />
          </button>
        </div>
      </div>
      <Link className={styles.link} to={item?.url}>
        <div className={styles.body}>
          <div className={styles.line}>
            <div className={styles.title}>
              <b>BU Alumni Exclusive - </b>
              {item?.name}
            </div>
          </div>
          <div>{item?.description}</div>
          <div className={styles.line}>
            <div className={styles.price}>14999 INR</div>
            {/* <div className={styles.cut}>
              <s>14900</s>
            </div> */}
          </div>
          {/* <div className={styles.line}>
            <div className={styles.users}>
              {item?.users?.map((x, index) => (
                <div className={styles.avatar} key={index}>
                  <img src={x.avatar} alt="Avatar" />
                </div>
              ))}
            </div>
            <div className={styles.counter}>{item.counter}</div>
          </div> */}
        </div>
      </Link>
    </div>
  );
};

export default Card;
