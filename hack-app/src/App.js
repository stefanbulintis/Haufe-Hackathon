import React, { useState, useEffect } from 'react';
import Map from './components/Map';
import './App.css';
import Table from './components/Table';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import {Routes, useNavigate} from "react-router-dom";
import Navbar from './Navigation/Navbar';
//import React from "react";
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
  useEffect(() => {
    async function Points(){
      const Points = await getAllPoints();
      console.log(Points);
      SetPoints(Points);
    }
    Points();
  })

  // useEffect(()=>{
  //   fetch("https://data.primariatm.ro/api/3/action/datastore_search?resource_id=d0134630-84d9-40b8-9bcb-dfdc926d66ab&limit=5") 
  //    .then(resp=>resp.json())
  //    .then(resp=>console.log(resp));
  // })
console.log("here", points)
  return (
    <> 
    <div>
      <Navbar></Navbar>
    </div>
      {<Map/>}
      {<Table/>}
    </>
  );
}

export default App;