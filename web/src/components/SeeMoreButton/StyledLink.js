import { Link } from 'react-router-dom';
import styled from 'styled-components';



const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:link, &:active {
        text-decoration: none;
    };

    &:hover {
        color: red
    }

    &:visited {
        color: white
    }
`;

export default StyledLink;