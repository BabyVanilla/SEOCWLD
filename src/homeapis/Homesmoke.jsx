import React,{useEffect,useState} from 'react'

function Homesmoke() {
    const [data, setData] = useState([]);

    const apifetch = () => {
      fetch("https://reactmyproject.000webhostapp.com/smoke_sensor.php")
        .then((response) => response.json())
        .then((json) => {
          setData(json.smoke_sensor);
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
        <div style={{ height: "40px" }}>
          {data.slice(0, 1).map((mydata) => (
            <h1>{mydata.SMOKE_VALUE} PPM</h1>
          ))}
        </div>
      );
}

export default Homesmoke