import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = styled(Link)`
    text-decoration: none;
    background-color: white;
    color: black;
    width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    margin-right: 2.5%;
    margin-top: 25px;
    height: 70px;
    transition: 0s;
    
    &:hover {
        background-color: black;
        color: white;
        border: 1px solid #ffffff;
        height: 68px;
        width: 25%;
    }

    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export default StyledLink