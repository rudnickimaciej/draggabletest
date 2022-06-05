
const generateTableDefinition = require('./../sqlGenerator');

tablesData = {
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
                    allowNull : false,
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
                    allowNull : false,
                    reference: null
                },
                {
                    name:  "CITY",
                    type : "INT",
                    allowNull : true,
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
                    allowNull : false,
                    reference: null
                },
                {
                    name: "NAME",
                    type : "VARCHAR(30)",
                    allowNull : false,
                    reference: null
                }             
            ]
        }
    ]
  
}

describe("Generate sql based on tables", () => {
test('It should generate sql based on table', () => {
    const input = tablesData.tables[0];

    const output = "CREATE TABLE Person ( ID INT PRIMARY KEY NOT NULL , NAME VARCHAR(30) NOT NULL , LASTNAME VARCHAR(30) NOT NULL , CITY INT FOREIGN KEY REFERENCES(City.ID) )";

    expect(generateTableDefinition(input)).toEqual(output);
  });
});