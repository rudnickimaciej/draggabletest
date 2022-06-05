import React, {useState} from 'react'
import Table from '../Table'
import generate from './../../sqlGenerator/sqlGenerator'; 

const tablesData = {
    tables:
    [
        {
            name : "Person",
            position : null,
            color : "#fdfeee",
            fields : 
            [
                {
                    name: "ID",
                    type : "INT",
                    allowNul : false,
                    reference: null
                },
                {
                    name: "NAME",
                    type : "VARCHAR(30)",
                    allowNull : false,
                    reference: null
                },
                {
                    name: "LASTNAME",
                    type : "VARCHAR(30)",
                    allowNul : false,
                    reference: null
                },
                {
                    name:  "City",
                    type : "INT",
                    allowNul : true,
                    reference : "City"
                }
            ]
        },
        {
            name : "City",
            position : null,
            color : "#fdgfee",
            fields : 
            [
                {
                    name: "ID",
                    type : "INT",
                    allowNul : false,
                    reference: null
                },
                {
                    name: "NAME",
                    type : "VARCHAR(30)",
                    allowNul : false,
                    reference: null
                }             
            ]
        }
    ]
  }

const Editor = () => {

    let defs = generate(tablesData.tables);
    return(
    <div>
    {
        tablesData.tables.map(t=>(

            <Table table ={t}/>

        ))

    }
    </div>)

}
export default Editor;