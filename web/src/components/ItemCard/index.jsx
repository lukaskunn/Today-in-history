import React from 'react';

import './styles.css'

function ItemCard(props) {
    return (
        <a href={`${props.wikipedia}`} target="_blank" rel="noopener noreferrer">
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
        </a>
    )
}

export default ItemCard;