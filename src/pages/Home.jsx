import React, { useState } from "react";
import Map from "../components/Map";
import Search from "../components/Search";

function Home() {
  const [data, setData] = useState({});

  return (
    <div>
      <Search data={data} setData={setData}/>
      <Map data={data} />
    </div>
  );
}

export default Home;
