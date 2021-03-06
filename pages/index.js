import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import OverView from "../components/OverView";
import TopCountry from "../components/TopCountry";
import LineChart from "../components/LineChart";
import World from "../components/World";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home({ data }) {
  const info = data[0];
  const { TotalCases, TotalDeaths, TotalRecovered } = info;

  return (
    <div className={styles.container}>
      <Head>
        <title>World Covid Situation</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <main>
        <Navbar />
        <OverView
          TotalCases={TotalCases}
          TotalDeaths={TotalDeaths}
          TotalRecovered={TotalRecovered}
        />
        <World data={data} />
        <TopCountry data={data} />
        {/* <LineChart /> */}
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get(
    "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/",
    {
      headers: {
        "X-RapidAPI-Host":
          "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
        "X-RapidAPI-Key": "83712b7a59msh3c707d03b1cbf19p1b33d4jsna662d0e8fc77",
      },
    }
  );

  // Pass data to the page via props
  return { props: { data } };
}
