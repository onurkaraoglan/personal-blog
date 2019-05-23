import React from 'react'
import { Icon } from 'antd';
import './footer.css'
import { Link } from 'gatsby';


const Footer = () => (
  <div className="footer">
    <div>
      <ul className="footerul">
        <li className="footerli">
          <a href="https://www.linkedin.com/in/onurkaraoglan/?locale=en_US" target="_blank" rel="noopener noreferrer">
            <Icon className="footericon" type="linkedin" style={{ fontSize: '20px', color: '#ccc' }} theme="filled" />
          </a>
        </li> 
        <li className="footerli">
          <a href="https://github.com/onurkaraoglan" target="_blank" rel="noopener noreferrer">
            <Icon className="footericon" type="github" style={{ fontSize: '20px', color: '#ccc' }} theme="filled" />
          </a>
        </li>
        <li className="footerli">
          <a href="https://twitter.com/onurkaraoglan" target="_blank" rel="noopener noreferrer">
            <Icon className="footericon" type="twitter" style={{ fontSize: '20px', color: '#ccc' }} />
          </a>
        </li>
        <li className="footerli">
          <a href="https://medium.com/@onurkaraoglan" target="_blank" rel="noopener noreferrer">
            <Icon className="footericon" type="medium" style={{ fontSize: '20px', color: '#ccc' }} />
          </a>
        </li>
        <li className="footerli">
          <a href="https://www.instagram.com/okaraoglann/" target="_blank" rel="noopener noreferrer">
            <Icon className="footericon" type="instagram" style={{ fontSize: '20px', color: '#ccc' }} />
          </a>
        </li>
      </ul>
    </div>
    <div >
      <ul className="link">
        <li className="linkli">
          <Link to="/">Home</Link>
        </li>
        <li className="linkli">
          <Link to="/about">About</Link>
        </li>
        <li className="linkli">
          <Link to="/snippet">Code Snippets</Link>
        </li>
        <li className="linkli">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="linkli">
          <Link to="/recommendations">Recommendations</Link>
        </li>
        <li className="linkli">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
    <div>
      <p className="copyright">© Copyright 2019. Onur Karaoğlan</p>
    </div>
  </div>
)

export default Footer
