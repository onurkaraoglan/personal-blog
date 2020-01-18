import React from 'react'
import { Link } from 'gatsby'
import RecCard from './../recCard'
import { Col, Row } from 'antd';


const Recommendations = () => (
  <div className="rec">
    <Link className="rec" style={{margin:10, textAlign:"center", display:"block"}} to="/recommendations">Recommendations</Link>
    <div style= {{width:"55%", margin:"0 auto"}}>
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
  </div>
)


export default Recommendations
