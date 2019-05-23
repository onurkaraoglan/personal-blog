import React from 'react'
import { Link } from 'gatsby'
import BlogCard from './../blogCard'
import { Col, Row } from 'antd';


const Blog = () => (
  <div className="blog">
    <Link style={{ margin: 10, textAlign: "center", display: "block" }} to="/blog">Blog</Link>
    <div>
      <Row gutter={16} type="flex">
        <Col span={8} className="card">
          <BlogCard
            title="title 1"
            description="description 1"
            imgsrc="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            mediumlink="https://medium.com/@onurkaraoglan"

          />
        </Col>
        <Col span={8} className="card">
          <BlogCard
            title="title 1"
            description="description 1"
            imgsrc="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            mediumlink="https://medium.com/@onurkaraoglan"

          />
        </Col>
        <Col span={8} className="card">
          <BlogCard
            title="title 2"
            description="description 2"
            imgsrc="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            mediumlink="https://medium.com/@onurkaraoglan"

          />
        </Col>
      </Row>
    </div>
  </div>
)


export default Blog
