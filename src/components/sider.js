import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import { Icon } from 'antd';

const logo = require( "../images/gatsby-icon.png");

const StyledLink = styled(Link)`
font-size: 20px !important;
padding: 12px 12px 12px 45px !important;
color: #c5c5ec !important;
&:hover {
    color: #fff !important;
  }
`;

function myFunction() {
  var x = document.getElementById("mySidebar");
  if (x.className === "sidebar") {
    x.className += " responsive";
  } else {
    x.className = "sidebar";
  }
}

const Sider = () => (
    <div id="mySidebar" className="sidebar">
     <Link to="/" style= {{ marginBottom: -20}}> <img class="sidelogo" src={logo} alt="Onur Karaoğlan" style= {{maxWidth:50, marginLeft: 30}}/> </Link>
     <a href class="toggle" onClick={myFunction}>
        <Icon type="menu" />
      </a>
     <StyledLink to="/about">About</StyledLink>
     <StyledLink to="/snippet">Code Snippets</StyledLink>
     <StyledLink to="/blog">Blog</StyledLink>
     <StyledLink to="/usage">What I Use?</StyledLink>
     <StyledLink to="/contact">Contact</StyledLink>
    </div>
  )
  
  
  export default Sider
