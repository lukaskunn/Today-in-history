import React from 'react';
import StyledLink from './StyledLink';

// import { Container } from './styles';

function ReturnButton(props) {
  return (
    <StyledLink to="/" className="see-more" style={{ textDecoration: "none" }}>
      <h4>return</h4>
    </StyledLink>
  );
}

export default ReturnButton;