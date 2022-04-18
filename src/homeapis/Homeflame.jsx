import React,{useEffect,useState} from 'react'

function Homeflame() {
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
        <div style={{ height: "40px" }}>
          {data.slice(0, 1).map((mydata) => (
            <h1>{mydata.FLAME_VALUE}</h1>
          ))}
        </div>
      );
}

export default Homeflame