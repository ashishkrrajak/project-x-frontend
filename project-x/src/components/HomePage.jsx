import React from "react";
import bgImage from '../static/img/mainPage.jpg'
import SearchBar from "./SearchBar";


function HomePage(){
  const bgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "85vh",
    display : "flex",
    alignItems : "center",
    justifyContent: "center"
  };
  return (
    <div>
      <div style={bgStyle}>
      <SearchBar/>        
      </div>
      <h1>Hello Home</h1>
    </div>
  );
};

export default HomePage;
