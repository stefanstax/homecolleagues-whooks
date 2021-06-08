import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchField] = useState("");
  const filteredRobots = robots.length ? robots.filter((robot) => {return robot.name.toLowerCase().includes(searchfield.toLowerCase())}) : null;
  const onSearchChange = (event) => {setSearchField(event.target.value)};

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {return response.json()})
      .then((users) => {setRobots(users)});
  }, [searchfield])

    return !robots.length ? (
      <div className="h-screen flex justify-center items-center text-5xl text-indigo-300 bg-indigo-900"><h1 className="animate-pulse">Loading ...</h1> </div>
    ) : (
      <div className="flex flex-col bg-indigo-900 h-screen">
        <h1 className="text-4xl sm:text-2xl text-thin mx-auto mt-5 text-center text-white ">Home Colleagues With Hooks</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
        <div className="w-full mt-5 flex flex-wrap justify-center items-center py-7 bg-gray-900">   
          <div className="w-11/12 lg:w-80 md:w-80 flex items-center justify-between mx-2 my-3 md:my-0 font-medium p-3 rounded-md text-white shadow-2xl" style={{backgroundColor: "rgb(0, 74, 173)" }}><p>View Code</p><a href="https://github.com/stefanstax/homecolleagues-whooks/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/-GITHUB-303030.svg?style=for-the-badge&logo=github&logoColor=ffffff" /></a></div>
          <div className="w-11/12 lg:w-96 md:w-96 flex items-center justify-between mx-2 my-3 md:my-0 font-medium p-3 rounded-md text-white shadow-2xl" style={{backgroundColor: "rgb(0, 74, 173)" }}><p>View Code: (Without Hooks)</p><a href="https://github.com/stefanstax/homecolleagues/" target="_blank" rel=" noreferrer"><img src="https://img.shields.io/badge/-GITHUB-303030.svg?style=for-the-badge&logo=github&logoColor=ffffff"/></a></div>
        </div>
      </div>
    );  
  }

export default App;
