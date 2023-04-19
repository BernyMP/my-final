import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import DailyTasks from "./dailyTasks";
import TaskBoard from "./taskBoard";
import Organizations from "./organizations";

const Home = () => {
  const [homeData, setHomeData] = useState("");
  const [selectedPage, setSelectedPage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:80/homeData", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token: window.localStorage.getItem("token"),
          }),
        });
        const data = await response.json();
        if (data.data === "token expired") {
          setHomeData("token expired");
        } else {
          setHomeData(data.data);
        }
        console.log(data, "homeData");
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login";
  };

  const handleLinkClick = (page) => {
    if (page === "Log Out") {
      logOut();
    } else {
      setSelectedPage(page);
    }
  };

  if (homeData === "token expired") {
    setTimeout(() => {
      logOut();
    }, 30000);
    return (
      <div>
        <h1>No data</h1>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row h-screen">
        <div className="w-1/6 flex-grow">
          <Navbar onLinkClick={handleLinkClick} />
        </div>
        <div className="w-5/6 flex-grow">
          {selectedPage === "Daily Tasks" && <DailyTasks />}
          {selectedPage === "Page Not Found" && <TaskBoard />}
          {selectedPage === "Organizations" && <Organizations />}
        </div>
      </div>
    );
  }
};

export default Home;
