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
        <h1 className="text-4xl text-thin m-auto text-white ">Office Friends With Hooks</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
        <div className="flex flex-wrap w-full justify-center items-center my-10">
          <div className="w-full lg:w-4/12 2xl:w-3/12 md:w-6/12 flex sm:flex-col md:flex-row lg:flex-row my-3 mx-3 justify-around items-center font-medium p-3 rounded-md text-white shadow-2xl" style={{backgroundColor: "rgb(0, 74, 173)" }}><h4>Built by: Stefan Stax</h4> <a href="https://github.com/stefanstax/officefriends-whooks/"><img className="rounded-full mx-3 lg:my-0 md:my-1 sm:my-5 " src="https://img.shields.io/badge/-GITHUB-303030.svg?style=for-the-badge&logo=github&logoColor=ffffff" /></a></div>
          <div className="w-full lg:w-4/12 2xl:w-3/12 md:w-6/12 flex sm:flex-col md:flex-row lg:flex-row my-3 mx-3 justify-around items-center font-medium p-3 rounded-md text-white shadow-2xl" style={{backgroundColor: "rgb(0, 74, 173)" }}><h4>Check Office Friends Without Hooks</h4> <a href="https://github.com/stefanstax/officefriends"><img className="rounded-full mx-3 lg:my-0 md:my-1 sm:my-5 " src="https://img.shields.io/badge/-GITHUB-303030.svg?style=for-the-badge&logo=github&logoColor=ffffff" /></a></div>
        </div>
      </div>
    );  
  }

export default App;
