import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'
import MeImg from '../components/me';

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1 className="h1">About Me</h1>
    <div className="body">
      <p style={{fontSize:20}}><span role="img" aria-label="Hi">👋</span>  I'm Onur Karaoğlan, a Software Developer from Istanbul, Turkey. 
        I love to learn and discover all things about Web Development. 
        You can catch my code snippets on Twitter and Linkedin.
        <div style={{maxWidth:250, display: "block", margin: "20px auto"}}>
          <MeImg/>
        </div>
      </p>
      <p>
        How did I get into tech? I love learning new things. Naturally, tech was the perfect place to be. 
        It’s always changing and always moving forward. 
        First, I used jQuery, then Angular and now I use React for Front-End. Besides I used ASP.Net MVC but now I use Go for Back-End. 
        Some people might find this frustrating but I love it. 
        You need to never run out of things to learn to capture technology .
      </p>

      <h3>
        My Favorite Things
      </h3>
      <p>
        Here are my recommendation lists if you're interested in what tools I use or this site's tech stack.
        <ul style={{marginTop:15}}>
          <li>
            <Link style={{fontSize:16}} to="/uses">What I Use</Link>
          </li>
          <li>
            <Link style={{fontSize:16}} to="/techstack">Tech Stack</Link>
          </li>
        </ul>
      </p>
      <h3>
        Questions
      </h3>
      <p>
        Got a question for me or would like to get in touch, <Link style={{fontSize:16}} to="/contact">contact me.</Link>
      </p>
    </div>
  </Layout>
)

export default About
