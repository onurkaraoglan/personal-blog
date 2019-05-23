import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import RecCard from '../components/recCard'
import { Col, Row } from 'antd';

const Recommendations = () => (
  <Layout>
    <SEO title="Recommendations" />
    <div className="angled" style={{background: "#c5c5ec"}}>
      <div>
        <p>Recommendations</p>
      </div>
    </div>
    <div style= {{width:"50%", margin:"10% auto"}}>
      <Row gutter={16} type="flex">
        <Col span={12} className="card">
          <RecCard content="What I Use" icon="code"  style={{background: "#f7faff"}}/>
        </Col>
        <Col span={12} className="card">
          <RecCard content= "Tech Stack" icon="build" />
        </Col>
      </Row>
    </div>
  </Layout>
)

export default Recommendations
