import React, { useState } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";

const Preview = ({ className, item }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={cn(className, styles.item, { [styles.active]: visible })}>
      <div className={styles.head} onClick={() => setVisible(!visible)}>
        {item.question}
      </div>
      <div className={styles.body}>
        <div className={styles.content}>
          {item.answer}
          {/* The Stacks series of products: Stacks: Landing Page Kit, Stacks:
          Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready
          library of stackable content blocks built in React Native.
          Mix-and-match dozens of responsive elements to quickly configure your
          favorite landing page layouts or hit the ground running with 10
          pre-built templates, all in light or dark mode."{" "} */}
        </div>
      </div>
    </div>
  );
};

export default Preview;
