import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Icon } from 'antd';
import './contact.css'

const Contact = () => (

  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <div className="center">
      <h1>Want to get in touch?</h1>
      <p>Find me on <a href="https://www.linkedin.com/in/onurkaraoglan/?locale=en_US" target="_blank">
          linkedin
        </a>
        , <a href="https://medium.com/@onurkaraoglan" target="_blank">
          medium
        </a>
        , <a href="https://twitter.com/onurkaraoglan" target="_blank">
          twitter
        </a>
        , <a href="https://www.instagram.com/okaraoglann/" target="_blank">
          instagram
        </a>
        , <a href="https://www.facebook.com/onur.karaoglan.52" target="_blank">
          facebook
        </a> or <a href="https://github.com/onurkaraoglan" target="_blank">
          github
        </a>.
        </p>
      <ul className="contact">
        <li className="li">
          <a href="https://www.linkedin.com/in/onurkaraoglan/?locale=en_US" target="_blank">
            <Icon className="icon" type="linkedin" style={{ fontSize: '50px', color: '#111' }} theme="filled" />
          </a>
        </li>
        <li className="li">
          <a href="https://medium.com/@onurkaraoglan" target="_blank">
            <Icon className="icon" type="medium" style={{ fontSize: '50px', color: '#111' }} />
          </a>
        </li>
        <li className="li">
          <a href="https://twitter.com/onurkaraoglan" target="_blank">
            <Icon className="icon" type="twitter" style={{ fontSize: '50px', color: '#111' }} />
          </a>
        </li>
        <li className="li">
          <a href="https://www.instagram.com/okaraoglann/" target="_blank">
            <Icon className="icon" type="instagram" style={{ fontSize: '50px', color: '#111' }} />
          </a>
        </li>
        <li className="li">
          <a href="https://www.facebook.com/onur.karaoglan.52" target="_blank">
            <Icon className="icon" type="facebook" style={{ fontSize: '50px', color: '#111' }} theme="filled" />
          </a>
        </li>
        <li className="li">
          <a href="https://github.com/onurkaraoglan" target="_blank">
            <Icon className="icon" type="github" style={{ fontSize: '50px', color: '#111' }} theme="filled" />
          </a>
        </li>
      </ul>
      <p>Or email me at okaraoglan91@gmail.com</p>
    </div>
  </Layout>
)

export default Contact
