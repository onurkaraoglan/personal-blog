import React from 'react'
import { Link } from 'gatsby'
import BlogCard from './../blogCard'
import { Col, Row } from 'antd';


const Blog = () => (
  <div className="blog">
    <Link className="blog" style={{ margin: 10, textAlign: "center", display: "block" }} to="/blog">Blog</Link>
    <div>
      <Row gutter={16} type="flex">
        <Col span={8} className="card">
        <div onClick={()=> window.open("https://medium.com/@onurkaraoglan/big-o-notation-with-code-examples-302f999dec40", "_blank")}>
          <BlogCard
            title="Big O Notation"
            description="Big O notation is used in Computer Science to describe the performance or complexity of an algorithm. "
            imgsrc="https://res.cloudinary.com/onurkaraoglan/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1559310567/blog/Ekran_Resmi_2019-05-31_14.26.22_rhf0id.png"
            mediumlink="https://medium.com/@onurkaraoglan/big-o-notation-with-code-examples-302f999dec40"

          />
          </div>
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
