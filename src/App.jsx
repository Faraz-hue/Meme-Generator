import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  const [starWarsData, setStarWarsData] = React.useState(null);
  const [count, setCount] = React.useState(0)
  React.useEffect(() => {
    console.log("Use Side effet")
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]); // Empty dependency array means run only once
  console.log("rendered")

  const [allMemes, setAllMemes] = React.useState([])
  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then(res => res.json())
      .then(data => console.log(data.data.memes))
  }, [])

  return (
    <>
      <Header />
      <Body />
      <button className="btnCharacter" onClick={() => setCount(prevCount => prevCount + 1)}>Get the next Character</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </>
  );
}

export default App;