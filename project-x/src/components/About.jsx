import React from "react";
import "../css/About.css"; 
import ashishImg from '../static/img/ashish.jpeg'
import adityImg from '../static/img/adity.jpg'
import rituImg from '../static/img/ritu.jpg'

function About() {
  const ashishStyle = {
    backgroundImage: `url(${ashishImg})`,
  };

  const adityStyle = {
    backgroundImage: `url(${adityImg})`,
  };

  const rituStyle = {
    backgroundImage: `url(${rituImg})`,
  };

  return (
    <div>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>

      <h2 style={{ textAlign: 'center' }}>Our Team</h2>

      <div className="row">
        <div className="column">
          <div className="card">
            <div className="image" style={{ ...ashishStyle, height: "50%" }}></div>
            <div className="container">
              <h2>Ashish Kumar Rajak</h2>
              <p className="title">CEO & Founder</p>
              <p>Some text that describes me</p>
              <p>ashish@example.com</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="image" style={{ ...adityStyle, height: "50%" }}></div>
            <div className="container">
              <h2>Adity Shaw</h2>
              <p className="title">C0-Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>adity@example.com</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="image" style={{ ...rituStyle, height: "50%" }}></div>
            <div className="container">
              <h2>Ritunath Dey</h2>
              <p className="title">Developer</p>
              <p>Some text that describes me</p>
              <p>ritunathdey2001@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
