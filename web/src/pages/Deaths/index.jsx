import React, { useState, useEffect } from 'react';
import Header from '../../components/Header'
import ItemCard from '../../components/ItemCard'
import api from '../../services/api'
import ReturnButton from '../../components/ReturnButton'

import './styles.css'

function Deaths() {
  const [deaths, setDeaths] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  async function getData(e) {
    const response = await api.get('/');
    setDeaths(response.data.deaths);
  }

  return (
    <div className="deaths-container">
      <Header />
      <main>
        <ReturnButton />
        <fieldset className="deaths">
          <legend>Deaths</legend>
          {deaths.map((item, index) => {
            return <ItemCard year={item.year} description={item.description} wikipedia={item.wikipedia[0].wikipedia} key={index} />
          })}
        </fieldset>
      </main>
    </div>
  );
}

export default Deaths;