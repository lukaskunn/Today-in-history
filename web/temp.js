import React, {useState, useEffect} from 'react';
import api from '../../services/api';

function Landing() {
  const [dataEvents, setDataEvents] = useState([]);
  const [dataBirths, setDataBirths] = useState([]);
  const [dataDeaths, setDataDeaths] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  async function getData(e) {
    const response = await api.get('/');

    console.log(response.data.events);

    setDataEvents(response.data.events);
    setDataBirths(response.data.births);
    setDataDeaths(response.data.deaths);
  }


  return (
    <div>
      {dataEvents.map((item) => {
        return <h1>{item.year}</h1>
      })}
    </div>
  );
}

export default Landing;