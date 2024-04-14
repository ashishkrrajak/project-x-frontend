import React from "react";
import "../css/About.css"; 
import imgA from '../static/img/img_ar.jpeg'
import imgB from '../static/img/img_as.jpg'
import imgC from '../static/img/img_rd.jpg'

function About() {


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
            <div className="image" style={{height: "50%" }}>
              <img src ={imgA}/>
            </div>
            <div className="container">
              <h2>Ashish Kumar Rajak</h2>
              <p>Some text that describes me</p>
              <p>ashish@example.com</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="image" style={{height: "50%" }}>
              <img src ={imgB}/>
            </div>
            <div className="container">
              <h2>Adity Shaw</h2>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>adity@example.com</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="image" style={{height: "50%" }}>
              <img src ={imgC}/>
            </div>
            <div className="container">
              <h2>Ritunath Dey</h2>
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
