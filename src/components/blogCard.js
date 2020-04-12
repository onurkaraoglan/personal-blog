import React from 'react'
import { Card, Icon } from 'antd';

const { Meta } = Card;

const BlogCards = (props) => (
    <Card
        hoverable
        style={{ maxWidth: 300, margin: "15px auto" }}
        cover={
            <img
                alt="example"
                src={props.imgsrc}
                style={{height:150, objectFit:"cover"}}
            />
        }
        actions={[
            <a href={props.mediumlink} target="_blank" rel="noopener noreferrer">
                <Icon type="medium"/> <span style={{fontSize:12, marginLeft:5, verticalAlign: "0.2em"}}>READ MORE</span>
            </a>
        ]}
    >
        <Meta
            title={props.title}
            description={props.description}
        />
    </Card>
)


export default BlogCards