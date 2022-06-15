import React from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo} onClick={() => router.push("/")}>
        Covid<span>Tracker</span>
      </div>
    </div>
  );
};

export default Navbar;
