import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1 className="index">Hi, I'm Onur</h1>
    <div className="job">
      <span style={{fontSize:60}}>
      👨‍💻
      </span> 
      <p>
        Software Developer
      </p>
    </div>
    <p style= {{textAlign:"center", margin:40, fontSize:20}}>
     <b>NEW</b> Code Snippets from time to time 🔥🔥🔥
    </p>
    <div className="snippets">
      <Link style={{margin:10, textAlign:"center", display:"block", color:"#e567f4 !important"}} to="/snippet">Code Snippets</Link>
    </div>
    <div className="blog">
      <Link style={{margin:10, textAlign:"center", display:"block"}} to="/blog">Blog</Link>
    </div>
    <div className="rec">
      <Link style={{margin:10, textAlign:"center", display:"block"}} to="/recommendations">Recommendations</Link>
    </div>
  </Layout>
)

export default IndexPage
