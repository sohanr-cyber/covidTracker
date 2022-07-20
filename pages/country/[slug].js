import React from "react";
import Area from "../../components/Area";
import Composite from "../../components/Composite";
import MixedBar from "../../components/MixedBar";
import Navbar from "../../components/Navbar";
import OverView from "../../components/OverView";
import Rate from "../../components/Rate";
import styles from "../../styles/Country.module.css";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";

const Country = ({ data, stats }) => {
  const { ActiveCases, TotalCases, TotalDeaths, TotalRecovered, Population } =
    data[0];
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          {router.query.slug ? router.query.slug : <>World</>} Covid Situation
        </title>
      </Head>
      <Navbar />
      <OverView
        title={"USA"}
        TotalCases={TotalCases}
        TotalDeaths={TotalDeaths}
        TotalRecovered={TotalRecovered}
      />
      <div className={styles.flex}>
        <Rate
          cases={TotalDeaths}
          total={TotalCases}
          title={"Fatality Rate"}
          sample={"TOTAL CASES"}
        />
        <Rate
          cases={TotalRecovered}
          total={TotalCases}
          title={"Recovery Rate"}
          sample={"TOTAL CASES"}
        />
        <Rate
          cases={ActiveCases}
          total={Population}
          title={"Infection Rate"}
          sample={"TOTAL POPULATION"}
        />
      </div>
      <div className={styles.flex}>
        <Area
          data={stats}
          title={"Critical Cases treated in ICU"}
          number={698}
          percent={0.001}
        />
        <Area
          title={"Critical Cases treated in ICU"}
          number={72474}
          percent={0.2}
        />
      </div>
      <MixedBar data={stats} />
      <Composite data={stats} />
    </>
  );
};

export default Country;

export async function getServerSideProps(context) {
  const { params } = context;
  const slug = params;
  const { data } = await axios.get(
    `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/Canada/can`,
    {
      headers: {
        "X-RapidAPI-Host":
          "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
        "X-RapidAPI-Key": "83712b7a59msh3c707d03b1cbf19p1b33d4jsna662d0e8fc77",
      },
    }
  );

  const resp = await axios.get(
    `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/covid-ovid-data/sixmonth/USA`,
    {
      headers: {
        "X-RapidAPI-Host":
          "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
        "X-RapidAPI-Key": "83712b7a59msh3c707d03b1cbf19p1b33d4jsna662d0e8fc77",
      },
    }
  );

  console.log(data);

  // Pass data to the page via props
  return { props: { data, stats: resp.data } };
}
