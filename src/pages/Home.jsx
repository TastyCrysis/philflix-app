import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row title="Bald Verfügbar" fetchURL={requests.requestUpcoming} />
      <Row title="Beliebt" fetchURL={requests.requestPopular} />
      <Row title="Im Trend" fetchURL={requests.requestTrending} />
      <Row title="Best Bewertet" fetchURL={requests.requestTopRated} />
      <Row title="Beliebte Serien" fetchURL={requests.requestTopSeries} />
    </>
  );
};

export default Home;
