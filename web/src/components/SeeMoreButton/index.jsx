import React from 'react';
import { Link } from 'react-router-dom'
import { BiChevronsRight } from 'react-icons/bi'
import { IconContext } from "react-icons";
import StyledLink from './StyledLink'

// import { Container } from './styles';

function SeeMoreButton(props) {
  return (
    <StyledLink to={props.path} className="see-more" style={{ textDecoration: "none" }}>
      <h4>see all</h4>
    </StyledLink>
  );
}

export default SeeMoreButton;