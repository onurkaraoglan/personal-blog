import React from 'react'
import { Card, Icon } from 'antd';
import { Link } from 'gatsby'

const { Meta } = Card;

const Cards = (props) => (
    <Card
        hoverable
        style={{ maxWidth: 300, margin: "15px auto" }}
        cover={
                <Link to={props.insitelink}> 
                    <img 
                        alt="Onur Karaoğlan" 
                        style={{width: "100%"}} 
                        src={props.imgsrc} 
                    /> 
                </Link>                
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
        <Meta style={{cursor:"default"}}
            title={props.title}
            description={props.description}
        />
    </Card>
)


export default Cards