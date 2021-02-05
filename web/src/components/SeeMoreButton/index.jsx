import React from 'react';
import {Link} from 'react-router-dom'
import ArrowRight from '../../images/right-arrow.svg'
// import { Container } from './styles';

function SeeMoreButton(props) {
  return (
          <Link to={props.path} className="see-more"> 
          <p>see more</p>
            <img src={ArrowRight} width="100"/>
          </Link>
  );
}

export default SeeMoreButton;