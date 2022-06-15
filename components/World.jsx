import React, { useState } from "react";
import styles from "../styles/World.module.css";
import { useRouter } from "next/router";
const World = () => {
  const [nums, setNumbs] = useState("Have you ever worked on a");
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <span>i</span> Hint : Click on a Country for more info
      </div>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <tr>
            <th>Country</th>
            <th>Total Confirmed</th>
            <th>Total Recovered</th>
            <th>Total Deaths</th>
          </tr>
          {nums.split("").map((i, k) => (
            <tr key={k}>
              <td onClick={() => router.push("/country/usa")}>USA</td>
              <td>86,204,857</td>
              <td>82,354,143</td>
              <td>1,032,567</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default World;
