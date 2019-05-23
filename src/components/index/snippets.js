import React from 'react'
import { Link } from 'gatsby'
import Cards from './../card'
import { Col, Row } from 'antd';


const Snippets = () => (
  <div className="snippets">
    <Link style={{ margin: 10, textAlign: "center", display: "block", color: "#e567f4 !important" }} to="/snippet">Code Snippets</Link>
    <div>
      <Row gutter={16} type="flex">
        <Col span={8} className="card">
          <Cards
            title="title 1"
            description="description 1"
            imgsrc="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            linkedinlink="https://www.linkedin.com/in/onurkaraoglan/?locale=en_US"
            githublink="https://github.com/onurkaraoglan"
          />
        </Col>
        <Col span={8} className="card">
          <Cards
            title="title 1"
            description="description 1"
            imgsrc="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            linkedinlink="https://www.linkedin.com/in/onurkaraoglan/?locale=en_US"
            githublink="https://github.com/onurkaraoglan"
          />
        </Col>
        <Col span={8} className="card">
          <Cards
            title="title 2"
            description="description 2"
            imgsrc="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            linkedinlink="https://www.linkedin.com/in/onurkaraoglan/?locale=en_US"
            githublink="https://github.com/onurkaraoglan"
          />
        </Col>
      </Row>
    </div>
  </div>
)


export default Snippets
