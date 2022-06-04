import React, { useState, useEffect } from 'react';
import Map from './components/Map';
import './App.css';
import Table from './components/Table';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import {Routes, Route, useNavigate} from "react-router-dom";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
//TODO: start here
export async function getAllPoints() {

  try{
      const response = await fetch('http://localhost:8080/');
      return await response.json();
  }catch(error) {
      return [];
  }
}


function App() {
  const [points, SetPoints] = useState([]);
  // useEffect(() => {
  //   async function Points(){
  //     const Points = await getAllPoints();
  //     console.log(Points);
  //     SetPoints(Points)
  //   }
  //   Points();
  // })
console.log("here", points)
  return (
    <> 
    <div>
    </div>
      {<Map/>}
      {<Table/>}
    </>
  );
}

export default App;