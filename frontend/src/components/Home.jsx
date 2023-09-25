import React, { useState, useEffect } from "react";
import Videos from "./Videos";
import "./Home.css";
import vid1 from "../Assets/vid1.mp4";
import vid2 from "../Assets/vid2.mp4";
import vid3 from "../Assets/vid3.mp4";
import Navbars from "./Navbars";

const Home = () => {
  const [arr, setArr] = useState([]);
  const [arr2, setArr2] = useState([]);
  const [arr3, setArr3] = useState([]);
  const loadData = async () => {
    let responsed = await fetch("http://localhost:5000/api/v2/posts", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    responsed = await responsed.json();
    setArr(responsed[0]);
    setArr2(responsed[1]);
    setArr3(responsed[2]);
    // console.log(arr);
    // setTag1(responsed[0].tag);
    // setTag2(responsed[1].tag);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Navbars />
      <div className="app">
        <div className="app-videos">
          <Videos
            url={vid2}
            tag={arr.tag}
            desc={arr.desc}
            song="Enemy by Imagine Dragons"
            like={arr.like}
            share={arr.share}
            comment={arr.comment}
          />
          <Videos
            url={vid1}
            tag={arr2.tag}
            desc={arr2.desc}
            song="Legends Never die"
            like={arr2.like}
            share={arr2.share}
            comment={arr2.comment}
          />
          <Videos
            url={vid3}
            tag={arr3.tag}
            desc={arr3.desc}
            song="baywatch"
            like={arr3.like}
            share={arr3.share}
            comment={arr3.comment}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
