import React from "react";
import styles from "../styles/TopCountry.module.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 400000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const TopCountry = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Top Countries with daily new cases</div>
      <div className={styles.graph}>
        <ResponsiveContainer width="100%" aspect={7 / 3}>
          <BarChart
            layout="vertical"
            width={500}
            height={350}
            data={data}
            barSize={7}
            barCategoryGap={10}
            barGap={5}
            margin={{ top: 15, right: 5, bottom: 5, left: 15 }}
          >
            {/* <CartesianGrid stroke="#f5f5f5" /> */}
            <XAxis type="number" />
            <YAxis
              dataKey="name"
              type="category"
              scale=""
              padding={{ top: 20, bottom: 20 }}
              tickLine={false}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" barSize={20} fill="#333" background />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TopCountry;
