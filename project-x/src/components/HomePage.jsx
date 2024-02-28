import React from "react";
import bgImage from '../static/img/mainPage.jpg'


function HomePage(){
  const bgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "85vh",
  };
  return (
    <div>
      <div style={bgStyle}></div>
      <h1>Hello Home</h1>
    </div>
  );
};

export default HomePage;
