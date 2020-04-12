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
          <div onClick={() => window.open("https://medium.com/@onurkaraoglan/zinciri-k%C4%B1rma-y%C3%B6ntemi-ile-tembelli%C4%9Fimi-nas%C4%B1l-yendim-72f41fc42fd1", "_blank")}>
            <BlogCard
              title="“Zinciri Kırma!” Yöntemi ile Tembelliğimi Nasıl Yendim"
              description="Yapmayı inanılmaz bir şekilde istediğiniz ama bir türlü yapamadığınız şeyler var mı?"
              imgsrc="https://i.imgur.com/yh4skFy.jpg"
              mediumlink="https://medium.com/@onurkaraoglan/zinciri-k%C4%B1rma-y%C3%B6ntemi-ile-tembelli%C4%9Fimi-nas%C4%B1l-yendim-72f41fc42fd1"
            />
          </div>
        </Col>
        <Col span={8} className="card">
          <div onClick={() => window.open("https://medium.com/@onurkaraoglan/big-o-notation-with-code-examples-302f999dec40", "_blank")}>
            <BlogCard
              title="Big O Notation"
              description="Big O notation is used in Computer Science to describe the performance or complexity of an algorithm. "
              imgsrc="https://i.imgur.com/3Uoe4lU.png"
              mediumlink="https://medium.com/@onurkaraoglan/big-o-notation-with-code-examples-302f999dec40"
            />
          </div>
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
