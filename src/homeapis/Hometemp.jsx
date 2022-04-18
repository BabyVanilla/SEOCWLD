import React,{useEffect,useState} from 'react'

function Hometemp() {
    const [data, setData] = useState([]);

    const apifetch = () => {
      fetch("https://reactmyproject.000webhostapp.com/temperature.php")
        .then((response) => response.json())
        .then((json) => {
          setData(json.temperature);
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
            <h1>{mydata.TEMPERATURE_VALUE} °F</h1>
          ))}
        </div>
      );
}

export default Hometemp;