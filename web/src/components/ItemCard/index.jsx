import React from 'react';

import './styles.css'

function ItemCard(props) {
    return (
        <div className="item-card">
            <div className="image">
                <p>imagem </p>
            </div>
            <div className="content">
                <h3 className="year">1993</h3>
                <h4 className="description">
                    "Vandal king Huneric organises a conference
                    between Catholic and Arian bishops
                    at Carthage."
            </h4>
            </div>
        </div>
    )
}

export default ItemCard;