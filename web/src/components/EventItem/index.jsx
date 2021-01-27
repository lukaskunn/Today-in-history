import React from 'react';

// import { Container } from './styles';

function EventItem(props) {
  return (
      <div className="ventItem">
          <h3 className="year">{props.year}</h3>
          <h3 className="description">{props.description}</h3>
      </div>
  );
}

export default EventItem;