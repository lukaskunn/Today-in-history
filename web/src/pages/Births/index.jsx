import React, { useState, useEffect } from 'react';
import Header from '../../components/Header'
import ItemCard from '../../components/ItemCard'
import ReturnButton from '../../components/ReturnButton'

import api from '../../services/api'
import './styles.css'

function Births() {
  const [births, setBirths] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  async function getData(e) {
    const response = await api.get('/');
    setBirths(response.data.births);
  }

  return (
    <div className="births-container">
      <Header />
      <main>
      <ReturnButton />
        <fieldset className="births">
          <legend>Births</legend>
          {births.map((item, index) => {
            return <ItemCard year={item.year} description={item.description} wikipedia={item.wikipedia[0].wikipedia} key={index} />
          })}
        </fieldset>
      </main>
    </div>

  );
}

export default Births;