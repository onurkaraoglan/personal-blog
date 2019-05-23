import React from 'react'
import { Card, Icon } from 'antd';

const { Meta } = Card;

const Cards = (props) => (
    <Card
        hoverable
        style={{ maxWidth: 300, margin: "15px auto" }}
        cover={
            <img
                alt="example"
                src={props.imgsrc}
            />
        }
        actions={[
            <a href={props.linkedinlink} target="_blank" rel="noopener noreferrer">
                <Icon type="linkedin"/>
            </a>,

            <a href={props.githublink} target="_blank" rel="noopener noreferrer">
                <Icon type="github"/>
            </a>
        ]}
    >
        <Meta
            title={props.title}
            description={props.description}
        />
    </Card>
)


export default Cards