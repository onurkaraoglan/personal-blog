import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import { Icon } from 'antd';
import './sider.css'

const logo = require("../../images/logo.png");

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
    <Link to="/" style={{ marginBottom: -20 }}> <img class="sidelogo" src={logo} alt="Onur Karaoğlan" /> </Link>
    <a href class="toggle" onClick={myFunction}>
      <Icon type="menu" />
    </a>
    <StyledLink to="/about">About</StyledLink>
    <StyledLink to="/snippet">Code Snippets</StyledLink>
    <StyledLink to="/blog">Blog</StyledLink>
    <StyledLink to="/recommendations">Recommendations</StyledLink>
    <StyledLink to="/contact">Contact</StyledLink>
      <div>

      <ul className="sidecontact">
        <li className="sideli">
          <a href="https://www.linkedin.com/in/onurkaraoglan/?locale=en_US" target="_blank" rel="noopener noreferrer">
            <Icon className="sideicon" type="linkedin" style={{ fontSize: '20px', color: '#c5c5ec' }} theme="filled" />
          </a>
        </li>
        <li className="sideli">
          <a href="https://github.com/onurkaraoglan" target="_blank" rel="noopener noreferrer">
            <Icon className="sideicon" type="github" style={{ fontSize: '20px', color: '#c5c5ec' }} theme="filled" />
          </a>
        </li>
        <li className="sideli">
          <a href="https://twitter.com/onurkaraoglan" target="_blank" rel="noopener noreferrer">
            <Icon className="sideicon" type="twitter" style={{ fontSize: '20px', color: '#c5c5ec' }} />
          </a>
        </li>
        <li className="sideli">
          <a href="https://medium.com/@onurkaraoglan" target="_blank" rel="noopener noreferrer">
            <Icon className="sideicon" type="medium" style={{ fontSize: '20px', color: '#c5c5ec' }} />
          </a>
        </li>
      </ul>
      </div>
  </div>
)


export default Sider
