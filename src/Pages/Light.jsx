import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Navbar from "../components/Navbar";

export function LightSensor() {
  const [data, setData] = useState([]);

  const apifetch = () => {
    fetch("https://reactmyproject.000webhostapp.com/ir.php")
      .then((response) => response.json())
      .then((json) => {
        setData(json.IR);
      });
  };

  useEffect(() => {
    apifetch();
    const interval = setInterval(() => {
      apifetch();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Light Data</h1>
      <Table
        striped
        bordered
        hover
        style={{ width: "100%", marginTop: "15px" }}
      >
        <thead
          style={{
            backgroundColor: "#A2D5AB",
            borderColor: "green",
            height:"30px"

          }}
        >
          <th>Device ID</th>
          <th>Count</th>
          <th>IR(Infrared Radiation) value</th>
          <th>Reading Time</th>
        </thead>
        <tbody>
          {data.map((mydata) => (
            <tr style={{ textAlign: "center" }}>
              <td>{mydata.DEVICE_ID}</td>
              <td>{mydata.COUNT}</td>
              <td>{mydata.IR_VALUE}</td>
              <td>{mydata.READING_TIME}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default LightSensor;
