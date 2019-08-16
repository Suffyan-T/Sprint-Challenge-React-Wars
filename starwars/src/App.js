import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";



const App = () => {

  const [starWarsPeople, setStarWarsPeople] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(resolve => {
        setStarWarsPeople(resolve.data.results);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className='container'>
        {starWarsPeople.map((people, index) => {
          return <Card key={index} people={people} />;
        })}
      </div>
    </div>
  );
}

export default App;
