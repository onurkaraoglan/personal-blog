import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Col, Row } from 'antd';
import BlogCard from '../components/blogCard';

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <div className="angled" style={{background: "#04a87d"}}>
      <div>
        <p>Blog</p>
      </div>
    </div>
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
  </Layout>
)

export default Blog
