import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import ItemCard from "../../components/ItemCard";
import ReturnButton from "../../components/ReturnButton";
import getAtualDate from "../../functions/getAtualDate";

import api from "../../services/api";
import "./styles.css";

function Births() {
  const [births, setBirths] = useState([]);
  const [date, setDate] = useState();
  useEffect(() => {
    getData();
    setDate(getAtualDate());
  }, []);

  async function getData(e) {
    const response = await api.get("/");
    setBirths(response.data.births);
  }

  return (
    <div className="births-container">
      <Header />
      <main>
        <ReturnButton />
        <h1>{date}</h1>
        <fieldset className="births">
          <legend>Births</legend>
          {births.map((item, index) => {
            return (
              <ItemCard
                year={item.year}
                description={item.description}
                wikipedia={item.wikipedia[0].wikipedia}
                key={index}
                background={item.url_image}
              />
            );
          })}
        </fieldset>
      </main>
    </div>
  );
}

export default Births;
