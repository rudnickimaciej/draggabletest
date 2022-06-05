import React, {useState} from 'react'

const Field = (props) => {

    const [name, setName] = useState(props.field.name)
    const [type, setType] = useState(props.field.type)
    const [nullable, setNullable] = useState(props.field.allowNull)

    const setFieldNameHandler = (e) => { setName(e.target.value)}
    const setFieldTypeHandler = (e) => { setType(e.target.value)}
    const setFieldNullabilityHandler = (e) => { setNullable(e.target.value)}


    return(
        <div key={props.field.id} onContextMenu = {e => props.onFieldClicked(e, props.field.id)} className="table-field-container">          
            <button className ="table-field-button"> </button> 
            <div  className="table-field"> 
                 <input onChange ={setFieldNameHandler} className = "table-field-input" value={name}/> 
            </div>    
            <div  className="table-field"> 
                 <input onChange ={setFieldTypeHandler} className = "table-field-input" value = {type}/> 
            </div>   
            <div  className="table-field"> 
                 <input onChange ={setFieldNullabilityHandler} type ="checkbox" className="table-field-input" value = {nullable}/> 
            </div>    
            <div  className="table-field"> 
            <span> {props.field.id} </span>
            </div>                                  
        </div>
    )
}

export default Field