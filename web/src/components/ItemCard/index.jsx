import React from 'react';

import './styles.css'

function ItemCard(props) {
    return (
        <div className="item-card">
            <div className="image">
                <p>imagem </p>
            </div>
            <div className="content">
                <h2 className="year">{props.year}</h2>
                <h4 className="description">
                    {props.description}
            </h4>
            </div>
        </div>
    )
}

export default ItemCard;