import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import RecCard from '../components/recCard'
import { Col, Row } from 'antd';

const Recommendations = () => (
  <Layout>
    <SEO title="Recommendations" />
    <div className="angled" style={{background: "#a6b1d8"}}>
      <div>
        <p>Recommendations</p>
      </div>
    </div>
    <div style= {{width:"55%", margin:"10% auto"}}>
      <Row gutter={16} type="flex">
        <Col span={8} className="card">
          <RecCard content="What I Use" icon="code"/>
        </Col>
        <Col span={8} className="card">
          <RecCard content= "Tech Stack" icon="build" />
        </Col>
        <Col span={8} className="card">
          <RecCard content= "Favorite Podcasts" icon="audio" />
        </Col>
      </Row>
    </div>
  </Layout>
)

export default Recommendations
