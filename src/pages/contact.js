import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Icon } from 'antd';
import '../components/contact.css'

const Contact = () => (

  <Layout>
    <SEO title="Contact" />
    <p className="h1">Contact</p>
    <div className="center">
      <h1>Want to get in touch?</h1>
      <p>Find me on <a href="https://www.linkedin.com/in/onurkaraoglan/?locale=en_US" target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
        , <a href="https://github.com/onurkaraoglan" target="_blank" rel="noopener noreferrer">
          github
        </a>
        , <a href="https://twitter.com/onurkaraoglan" target="_blank" rel="noopener noreferrer">
          twitter
        </a>
        , <a href="https://medium.com/@onurkaraoglan" target="_blank" rel="noopener noreferrer">
          medium
        </a> or <a href="https://www.instagram.com/okaraoglann/" target="_blank" rel="noopener noreferrer">
          instagram
        </a>  .
        </p>
      <ul className="contact">
        <li className="li">
          <a href="https://www.linkedin.com/in/onurkaraoglan/?locale=en_US" target="_blank" rel="noopener noreferrer">
            <Icon className="icon" type="linkedin" style={{ fontSize: '50px', color: '#111' }} theme="filled" />
          </a>
        </li>
        <li className="li">
          <a href="https://github.com/onurkaraoglan" target="_blank" rel="noopener noreferrer">
            <Icon className="icon" type="github" style={{ fontSize: '50px', color: '#111' }} theme="filled" />
          </a>
        </li>
        <li className="li">
          <a href="https://twitter.com/onurkaraoglan" target="_blank" rel="noopener noreferrer">
            <Icon className="icon" type="twitter" style={{ fontSize: '50px', color: '#111' }} />
          </a>
        </li>
        <li className="li">
          <a href="https://medium.com/@onurkaraoglan" target="_blank" rel="noopener noreferrer">
            <Icon className="icon" type="medium" style={{ fontSize: '50px', color: '#111' }} />
          </a>
        </li>
        <li className="li">
          <a href="https://www.instagram.com/okaraoglann/" target="_blank" rel="noopener noreferrer">
            <Icon className="icon" type="instagram" style={{ fontSize: '50px', color: '#111' }} />
          </a>
        </li>
      </ul>
      <p>Or email me at onur@onurkaraoglan.com</p>
    </div>
  </Layout>
)

export default Contact
