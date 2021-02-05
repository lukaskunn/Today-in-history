import React from 'react';
import { Link } from 'react-router-dom'
import { FaAngleDoubleRight } from 'react-icons/fa'
import StyledLink from './StyledLink'
// import { Container } from './styles';

function SeeMoreButton(props) {
  return (
    <div className="content">
      <StyledLink to={props.path} className="see-more">
        <h4 className="text">see more <FaAngleDoubleRight /></h4>
      </StyledLink>
    </div>
  );
}

export default SeeMoreButton;