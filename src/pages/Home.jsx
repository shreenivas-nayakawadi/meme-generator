import React from "react";
import MemeCard from "../components/Card";
import { useEffect, useState } from "react";
import { getAllMemes } from "../api/memes";

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllMemes().then((memes) => setData(memes.data.memes));
  }, []);

  return (
    <div className=" home">
      <div className="row ">
        {data.map((el) => (
          <MemeCard key={el.id} title={el.name} image={el.url} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
