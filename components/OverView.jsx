import React from "react";
import styles from "../styles/OverView.module.css";
import CountUp from "react-countup";
import { useRouter } from "next/router";

const OverView = ({ title }) => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      {title && <div className={styles.title}>USA</div>}

      <div className={styles.flex}>
        {" "}
        <div className={`${styles.item} ${styles.confirmed}`}>
          <div className={styles.title}>total Confirmed</div>
          <div className={styles.number}>
            <CountUp duration={2} end={564684} separator="," />
          </div>
        </div>
        <div className={`${styles.item} ${styles.recovered}`}>
          <div className={styles.title}>total Confirmed</div>
          <div className={styles.number}>
            {" "}
            <CountUp duration={2} end={564684} separator="," />
          </div>
        </div>
        <div className={`${styles.item} ${styles.deaths}`}>
          <div className={styles.title}>total Confirmed</div>
          <div className={styles.number}>
            {" "}
            <CountUp duration={2} end={564684} separator="," />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
