import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import ItemCard from "../../components/ItemCard";
import api from "../../services/api";
import ReturnButton from "../../components/ReturnButton";
import getAtualDate from '../../functions/getAtualDate'
import "./styles.css";

function Events() {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState();
  useEffect(() => {
    getData();
    setDate(getAtualDate());
  }, []);

  async function getData(e) {
    const response = await api.get("/");
    setEvents(response.data.events);
  }

  return (
    <div className="events-container">
      <Header />
      <main>
        <ReturnButton />
        <h1>{date}</h1>
        <fieldset className="events">
          <legend>Events</legend>
          {events.map((item, index) => {
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

export default Events;
