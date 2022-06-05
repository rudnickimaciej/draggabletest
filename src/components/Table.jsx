import Draggable from 'react-draggable';
import Field from './Field';
import {useState, useRef, useEffect} from 'react'

const Table = (props) => {
   
    
    
    const addIndexexToFields = (fieldsArr) => {
        return fieldsArr.map((f,index)=>(
            {
                ...f,
                id : index
            }
        ))
    }

    const tableRef = useRef();
    const [name, setName] = useState(props.table.name)
    const [fields, setFields] = useState(addIndexexToFields(props.table.fields))
    const [backgroundColor, setBackgroundColor] = useState(props.table.color)
    const [relations, setRelations] = useState([])
    const [top, setTop] = useState()
    const [left, setLeft] = useState()



    const onAddNewFieldButtonHandler = () => {
        setFields((prevState) => [
            ...prevState,
            {
                id: Math.max(...(prevState.map(object=>{
                    return object.id
                }))) + 1,
                name:'nazwa',
                type: 'typ',
                allowNull: false
            }
        ])
    }

    const handleFieldRemove = (e, key) => {       
        //TODO: Poprawić usuwanie pól (aktualnie usuwa się ostatnie na liście)
        e.preventDefault();
        console.log(key);
        console.log(fields)
        const filtered = fields.filter(f => {return f.id != key})
        console.log(filtered)

        // setFields(prevState => addIndexexToFields(prevState.filter(f => {return f.id !== key})))
        setFields(filtered)

        console.log(fields)
    }

    const handleDrag = (e) => {
        console.log(left + top)
    }
    const chandleNameChange = (e) => {
        setName(e.target.value);
    }
    return(

        <Draggable
  
            handle=".handle"
            defaultPosition={{x: 10, y: 10}}
            position={null}
            grid={[25, 25]}
            scale={1}

            // onStart={this.handleStart}
           // onDrag={handleDrag}
            // onStop={this.handleStop}
        >
            <div style ={{top, left, backgroundColor}} className="handle table">
                <div  className="table-name" >
                    <input className="table-name-input" value = {name} onChange= {chandleNameChange}/>
                </div>
        
            <hr></hr>
            {
                fields.map((f)=>       
                    <Field onFieldClicked ={handleFieldRemove} field={f}/>
                )
            }
            

            <button onClick = {onAddNewFieldButtonHandler} className="table-add-field"> +</button>
            </div>
       </Draggable>
    )}

export default Table