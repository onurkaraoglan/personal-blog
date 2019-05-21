import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Snippets from '../components/index/snippets';
import Blog from '../components/index/blog';
import Recommendations from '../components/index/recommendations';
import Job from '../components/index/job';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1 className="index">Hi, I'm Onur</h1>
    <Job/>
    <Snippets/>
    <Blog/>
    <Recommendations/>
  </Layout>
)

export default IndexPage
