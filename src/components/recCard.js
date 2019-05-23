import React from 'react'
import { Card, Icon } from 'antd';

const { Meta } = Card;

const RecCards = (props) => (
    <Card hoverable className="reccard">
        <p>
            {props.content} 
            <br/>
            <Icon type = {props.icon} style={{fontSize: 50, marginTop: 15}}/>  
        </p>
    </Card>
   
)


export default RecCards