import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./User.module.sass";
import Icon from "../../Icon";
import Theme from "../../Theme";
import { useSelector } from "react-redux";

const items = [
  {
    title: "My profile",
    icon: "user",
    url: "/profile",
  },
  {
    title: "Dark theme",
    icon: "bulb",
  },
  {
    title: "Logout",
    icon: "exit",
    url: "/logout",
  },
];

const User = ({ className }) => {
  const [visible, setVisible] = useState(false);
  const UserData = useSelector((state) => state.UserData);

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div className={cn(styles.user, className)}>
        <div className={styles.head} onClick={() => setVisible(!visible)}>
          <div className={styles.avatar}>
            <img
              src={UserData?.profileDP || "/images/content/avatar-big.jpg"}
              alt="Avatar"
            />
          </div>
          <div className={styles.wallet}>
            {UserData.name}
            {/* <span className={styles.currency}>ETH</span> */}
          </div>
        </div>
        {visible && (
          <div className={styles.body}>
            <div className={styles.name}>{UserData.name}</div>
            <div className={styles.code}>
              <div className={styles.number}>{UserData.username}</div>
              {/* <button className={styles.copy}>
								<Icon name='copy' size='16' />
							</button> */}
            </div>
            {/* <div className={styles.wrap}>
							<div className={styles.line}>
								<div className={styles.preview}>
									<img src='/images/content/etherium-circle.jpg' alt='Etherium' />
								</div>
								<div className={styles.details}>
									<div className={styles.info}>Balance</div>
									<div className={styles.price}>4.689 ETH</div>
								</div>
							</div>
							<button className={cn('button-stroke button-small', styles.button)}>Manage fun on Coinbase</button>
						</div> */}
            <div className={styles.menu}>
              {items.map((x, UserData, index) =>
                x.url ? (
                  x.url.startsWith("http") ? (
                    <a
                      className={styles.item}
                      href={x.url}
                      rel="noopener noreferrer"
                      key={index}
                    >
                      <div className={styles.icon}>
                        <Icon name={x.icon} size="20" />
                      </div>
                      <div className={styles.text}>{x.title}</div>
                    </a>
                  ) : (
                    <Link
                      className={styles.item}
                      to={x.url}
                      onClick={() => setVisible(!visible)}
                      key={index}
                    >
                      <div className={styles.icon}>
                        <Icon name={x.icon} size="20" />
                      </div>
                      <div className={styles.text}>{x.title}</div>
                    </Link>
                  )
                ) : (
                  <div className={styles.item} key={index}>
                    <div className={styles.icon}>
                      <Icon name={x.icon} size="20" />
                    </div>
                    <div className={styles.text}>{x.title}</div>
                    <Theme className={styles.theme} />
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default User;
