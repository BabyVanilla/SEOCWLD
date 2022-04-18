import React,{useEffect,useState} from 'react'

function Homelight() {
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
        <div style={{ height: "40px" }}>
          {data.slice(0, 1).map((mydata) => (
            <h1>{mydata.IR_VALUE} PPM</h1>
          ))}
        </div>
      );
}

export default Homelight