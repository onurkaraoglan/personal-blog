import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Cards from '../components/card'
import { Col, Row } from 'antd';

const Snippet = () => (
  <Layout>
    <SEO title="Snippet" />
    <div className="angled" style={{background: "#fbe7fd"}}>
      <div>
        <p>Code Snippets</p>
      </div>
    </div>
    <Row gutter={16}>
      <Col span={8} className="card">
        <Cards 
          title="title 1" 
          description="description 1" 
          imgsrc="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          linkedinlink= "https://www.linkedin.com/in/onurkaraoglan/?locale=en_US"
          githublink= "https://github.com/onurkaraoglan"
        />
      </Col>
      <Col span={8} className="card">
        <Cards 
          title="title 1" 
          description="description 1" 
          imgsrc="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          linkedinlink= "https://www.linkedin.com/in/onurkaraoglan/?locale=en_US"
          githublink= "https://github.com/onurkaraoglan"
        />
      </Col>
      <Col span={8} className="card">
        <Cards 
          title="title 2"
          description="description 2"
          imgsrc="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          linkedinlink= "https://www.linkedin.com/in/onurkaraoglan/?locale=en_US"
          githublink= "https://github.com/onurkaraoglan"
        />
      </Col>
      <Col span={8} className="card">
        <Cards 
          title="title 3"
          description="description 3"
          imgsrc="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          linkedinlink= "https://www.linkedin.com/in/onurkaraoglan/?locale=en_US"
          githublink= "https://github.com/onurkaraoglan"
        />
      </Col>
      <Col span={8} className="card">
        <Cards 
          title="title 2"
          description="description 2"
          imgsrc="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          linkedinlink= "https://www.linkedin.com/in/onurkaraoglan/?locale=en_US"
          githublink= "https://github.com/onurkaraoglan"
        />
      </Col>
      <Col span={8} className="card">
        <Cards 
          title="title 3"
          description="description 3"
          imgsrc="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          linkedinlink= "https://www.linkedin.com/in/onurkaraoglan/?locale=en_US"
          githublink= "https://github.com/onurkaraoglan"
        />
      </Col>
    </Row>
  </Layout>
)

export default Snippet
