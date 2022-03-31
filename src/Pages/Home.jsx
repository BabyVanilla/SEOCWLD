import React from "react";
import "./Home.css";
import { Row, Col, Container, CardGroup, Card } from "react-bootstrap";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <p id="welcome-text">
        “ It takes 20 years to build a reputation and few minutes of incident to
        ruin it. ”
      </p>

      <div class="container">
        {" "}
        <CardGroup>
          <Card>
            <div className="card1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36px"
                viewBox="0 0 24 24"
                width="36px"
                fill="#FFFFFF"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-1v1h1v2h-1v1h1v2h-2V5z" />
              </svg>
              <h1>32°c</h1>
              <h2>Temperature</h2>
              <h3>(Ideal Tempereture : 29°c)</h3>
            </div>
            <div className="card2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="36px"
                viewBox="0 0 24 24"
                width="36px"
                fill="#FFFFFF"
              >
                <g>
                  <path d="M0,0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <g>
                    <path d="M14.5,17c0,1.65-1.35,3-3,3s-3-1.35-3-3h2c0,0.55,0.45,1,1,1s1-0.45,1-1s-0.45-1-1-1H2v-2h9.5 C13.15,14,14.5,15.35,14.5,17z M19,6.5C19,4.57,17.43,3,15.5,3S12,4.57,12,6.5h2C14,5.67,14.67,5,15.5,5S17,5.67,17,6.5 S16.33,8,15.5,8H2v2h13.5C17.43,10,19,8.43,19,6.5z M18.5,11H2v2h16.5c0.83,0,1.5,0.67,1.5,1.5S19.33,16,18.5,16v2 c1.93,0,3.5-1.57,3.5-3.5S20.43,11,18.5,11z" />
                  </g>
                </g>
              </svg>
              <h1>360 PPM</h1>
              <h2>Smoke level</h2>
              <h3>(Range : 10 to 1000 PPM)</h3>
            </div>

            <div className="card3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="36px"
                viewBox="0 0 24 24"
                width="36px"
                fill="#FFFFFF"
              >
                <g>
                  <rect fill="none" height="24" width="24" y="0" />
                </g>
                <g>
                  <path d="M19.48,12.35c-1.57-4.08-7.16-4.3-5.81-10.23c0.1-0.44-0.37-0.78-0.75-0.55C9.29,3.71,6.68,8,8.87,13.62 c0.18,0.46-0.36,0.89-0.75,0.59c-1.81-1.37-2-3.34-1.84-4.75c0.06-0.52-0.62-0.77-0.91-0.34C4.69,10.16,4,11.84,4,14.37 c0.38,5.6,5.11,7.32,6.81,7.54c2.43,0.31,5.06-0.14,6.95-1.87C19.84,18.11,20.6,15.03,19.48,12.35z M10.2,17.38 c1.44-0.35,2.18-1.39,2.38-2.31c0.33-1.43-0.96-2.83-0.09-5.09c0.33,1.87,3.27,3.04,3.27,5.08C15.84,17.59,13.1,19.76,10.2,17.38z" />
                </g>
              </svg>
              <h1>1</h1>
              <h2>Flame level</h2>
              <h3>(value varies b/w : 0-1)</h3>
            </div>

            {/* <div className="card4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 0 24 24"
                width="35px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99l1.5 1.5z" />
              </svg>
              <h1>84 BPM</h1>
              <h2>Moisture</h2>
              <h3>(Ideal ECG value : 49 to 100 BPM)</h3>
            </div> */}

            <div className="card4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 20 20"
                height="36px"
                viewBox="0 0 20 20"
                width="36px"
                fill="#FFFFFF"
              >
                <rect fill="none" height="20" width="20" />
                <path d="M10,7.5c1.38,0,2.5,1.12,2.5,2.5s-1.12,2.5-2.5,2.5S7.5,11.38,7.5,10S8.62,7.5,10,7.5z M10,6c-2.21,0-4,1.79-4,4s1.79,4,4,4 s4-1.79,4-4S12.21,6,10,6L10,6z M3.75,10.75c0.41,0,0.75-0.34,0.75-0.75c0-0.41-0.34-0.75-0.75-0.75h-2C1.34,9.25,1,9.59,1,10 s0.34,0.75,0.75,0.75H3.75z M18.25,10.75c0.41,0,0.75-0.34,0.75-0.75c0-0.41-0.34-0.75-0.75-0.75h-2c-0.41,0-0.75,0.34-0.75,0.75 s0.34,0.75,0.75,0.75H18.25z M9.25,3.75C9.25,4.16,9.59,4.5,10,4.5c0.41,0,0.75-0.34,0.75-0.75v-2C10.75,1.34,10.41,1,10,1 S9.25,1.34,9.25,1.75V3.75z M13.89,5.05c-0.29,0.29-0.29,0.77,0,1.06s0.77,0.29,1.06,0l1.06-1.06c0.29-0.29,0.29-0.77,0-1.06 c-0.29-0.29-0.77-0.29-1.06,0L13.89,5.05z M3.99,14.95c-0.29,0.29-0.29,0.77,0,1.06s0.77,0.29,1.06,0l1.06-1.06 c0.29-0.29,0.29-0.77,0-1.06c-0.29-0.29-0.77-0.29-1.06,0L3.99,14.95z M5.05,6.11c0.29,0.29,0.77,0.29,1.06,0s0.29-0.77,0-1.06 L5.05,3.99c-0.29-0.29-0.77-0.29-1.06,0s-0.29,0.77,0,1.06L5.05,6.11z M14.95,16.01c0.29,0.29,0.77,0.29,1.06,0s0.29-0.77,0-1.06 l-1.06-1.06c-0.29-0.29-0.77-0.29-1.06,0c-0.29,0.29-0.29,0.77,0,1.06L14.95,16.01z M9.25,18.25C9.25,18.66,9.59,19,10,19 c0.41,0,0.75-0.34,0.75-0.75v-2c0-0.41-0.34-0.75-0.75-0.75s-0.75,0.34-0.75,0.75V18.25z" />
              </svg>
              <h1>200</h1>
              <h2>light level</h2>
              <h3>(value varies b/w : 0-1023)</h3>
            </div>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default Home;
