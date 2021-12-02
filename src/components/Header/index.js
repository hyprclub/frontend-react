import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";
import Icon from "../Icon";
import Image from "../Image";
// import Notification from "./Notification";
import User from "./User";
import { useSelector } from "react-redux";

const nav = [
  // {
  //   url: "/search01",
  //   title: "Discover",
  // },
  {
    url: "/BuAlumni",
    title: "BU Alumni",
  },
  {
    url: "/comingsoon",
    title: "Coming soon",
  },
  // {
  // 	url: '/profile',
  // 	title: 'Profile',
  // },
];

const Headers = () => {
  const [visibleNav, setVisibleNav] = useState(false);
  // const [search, setSearch] = useState('')

  const loggedIn = useSelector((state) => state.UserData.loggedIn);

  return (
    <header className={styles.header}>
      <div className={cn("container", styles.container)}>
        <Link
          className={styles.logo}
          onClick={() => {
            setVisibleNav(false);
          }}
          to="/"
        >
          <Image
            className={styles.pic}
            src="/images/logo-dark.png"
            srcDark="/images/logo-light.png"
            alt="HyprClub"
          />
        </Link>
        <div className={cn(styles.wrapper, { [styles.active]: visibleNav })}>
          <nav className={styles.nav}>
            {nav.map((x, index) => (
              <Link
                className={styles.link}
                // activeClassName={styles.active}
                to={x.url}
                onClick={() => {
                  setVisibleNav(!visibleNav);
                }}
                key={index}
              >
                {x.title}
              </Link>
            ))}
          </nav>

          {loggedIn}
          {loggedIn === false && (
            <>
              <Link
                className={cn("button-small", styles.button)}
                onClick={() => {
                  setVisibleNav(!visibleNav);
                }}
                to="/signup"
              >
                Sign Up
              </Link>
              <Link
                className={cn("button-small", styles.button)}
                onClick={() => {
                  setVisibleNav(!visibleNav);
                }}
                to="/login"
              >
                Log In
              </Link>
            </>
          )}
          {loggedIn && (
            <>
              <Link className={cn("button-small", styles.button)} to="/logout">
                Log out
              </Link>
            </>
          )}
        </div>
        {/* <Notification className={styles.notification} /> */}

        {/* <Link
          className={cn("button-stroke button-small", styles.button)}
          to="/connect-wallet"
        >
          Connect Wallet
        </Link> */}
        {loggedIn && <User className={styles.user} />}
        {loggedIn === false && (
          <>
            <Link className={cn("button-small", styles.button)} to="/signup">
              Sign Up
            </Link>
            <Link className={cn("button-small", styles.button)} to="/login">
              Log In
            </Link>
          </>
        )}
        <button
          className={cn(styles.burger, { [styles.active]: visibleNav })}
          onClick={() => setVisibleNav(!visibleNav)}
        ></button>
      </div>
    </header>
  );
};

export default Headers;
