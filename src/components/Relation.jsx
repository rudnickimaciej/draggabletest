import React, {useState} from 'react'

const Relation = (props) => {



    return(
        <svg width="500" height="500"><line x1={props.x1} y1={props.y1} x2={props.x2} y2={props.y2} stroke="black"/></svg>
    )
}


export default Relation