import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Navbar from "../components/Navbar";

export function FlameSensor() {
  const [data, setData] = useState([]);

  const apifetch = () => {
    fetch("https://reactmyproject.000webhostapp.com/flame_sensor.php")
      .then((response) => response.json())
      .then((json) => {
        setData(json.flame_sensor);
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
      <h1 style={{ textAlign: "center" }}>Flame Data</h1>
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
          <th>Flame Value</th>
          <th>Reading Time</th>
        </thead>
        <tbody>
          {data.map((mydata) => (
            <tr style={{ textAlign: "center" }}>
              <td>{mydata.DEVICE_ID}</td>
              <td>{mydata.FLAME_VALUE}</td>
              <td>{mydata.READING_TIME}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default FlameSensor;
