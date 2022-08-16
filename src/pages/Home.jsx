import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row
        rowID="1"
        title="Bald Verfügbar"
        fetchURL={requests.requestUpcoming}
      />
      <Row rowID="2" title="Beliebt" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="Im Trend" fetchURL={requests.requestTrending} />
      <Row
        rowID="4"
        title="Best Bewertet"
        fetchURL={requests.requestTopRated}
      />
      <Row
        rowID="5"
        title="Beliebte Serien"
        fetchURL={requests.requestTopSeries}
      />
    </>
  );
};

export default Home;
