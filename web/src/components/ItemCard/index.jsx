import React from 'react';

import './styles.css'

function ItemCard(props) {
    return (
        <div className="item-card">
                <h3 className="year">{props.year}</h3>
                <h3 className="description">{props.description}</h3>
        </div>
    )
}

export default ItemCard;