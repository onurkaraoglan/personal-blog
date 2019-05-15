import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import './sider.css'

const logo = require( "../images/gatsby-icon.png");

const StyledLink = styled(Link)`
font-size: 20px !important;
padding: 12px 12px 12px 45px !important;
color: #c5c5ec !important;
&:hover {
    color: #9999ff !important;
    background-color: #00004c;
  }
`;


const Sider = () => (
    <div className="sidenav">
     <Link to="/" style= {{ marginBottom: -20}}> <img src={logo} alt="Onur Karaoğlan" style= {{maxWidth:50, marginLeft: 30}}/> </Link>
     <StyledLink to="/about">About</StyledLink>
     <StyledLink to="/snippet">Code Snippets</StyledLink>
     <StyledLink to="/blog">Blog</StyledLink>
     <StyledLink to="/usage">What I Use?</StyledLink>
     <StyledLink to="/contact">Contact</StyledLink>
    </div>
  )
  
  
  export default Sider
