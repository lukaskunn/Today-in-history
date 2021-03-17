import React from "react";

import "./styles.css";

function ItemCard(props) {
  return (
    <a
      href={`${props.wikipedia}`}
      target="_blank"
      rel="noopener noreferrer"
      url_image={props.url_image}
    >
      <div
        className="item-card"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${props.background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      >
        <div className="content">
          <h2 className="year">{props.year}</h2>
          <h4 className="description">{props.description}</h4>
        </div>
      </div>
    </a>
  );
}

export default ItemCard;
