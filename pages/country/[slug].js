import React from "react";
import Area from "../../components/Area";
import Composite from "../../components/Composite";
import MixedBar from "../../components/MixedBar";
import Navbar from "../../components/Navbar";
import OverView from "../../components/OverView";
import Rate from "../../components/Rate";
import styles from "../../styles/Country.module.css";
import Head from "next/head";

const Country = () => {
  return (
    <>
      <Head>
        <title>USA Covid Situation</title>
      </Head>
      <Navbar />
      <OverView title={"USA"} />
      <div className={styles.flex}>
        <Rate />
        <Rate />
        <Rate />
      </div>
      <div className={styles.flex}>
        <Area />
        <Area />
      </div>
      <Composite />
      <MixedBar />\
    </>
  );
};

export default Country;
