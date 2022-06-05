const SQLType = {
  ALTER: "ALTER",
  ADD: "ADD",
  CREATE: "CREATE",
  FORMAT: "FORMAT",
};


export default function generate (tables)  {
  return toString(sortDefinitions(generateTableDefinitions(tables).flat()));
};

const toString = (definitions) => {

    return definitions.map(d=>d.sql).join("");
}
const sortDefinitions = (definitions) => {

    const indexes = []
    definitions.forEach(d=>{
        if(d.sqlType==SQLType.ALTER){
            indexes.push(definitions.indexOf(d))
        }
    })
    
    indexes.forEach(i=>{
        definitions.push(definitions.splice(i, 1)[0]);
    })
    return definitions;
};

const generateTableDefinitions = (tables) => {
 return tables.map((t) => generateTableDefinition(t));
};

const generateTableDefinition = (table) => {
  let sqls = [];

  sqls.push({
    sqlType: SQLType.CREATE,
    sql: "CREATE TABLE " + table.name + " (",
  });

  table.fields.forEach((f) => {
      let defs =[];
      defs.push({
        sqlType: SQLType.ADD,
        sql:
          " " +
          f.name +
          " " +
          f.type +
          (f.name == "ID" ? " PRIMARY KEY" : "") +
          (f.allowNull ? "" : " NOT NULL ") +
          " , ",
      });
      if(f.reference != null){
        defs.push({
            sqlType: SQLType.ALTER,
            sql:
              "ALTER TABLE " +
              table.name +
              " ADD FOREIGN KEY (" +
              f.name +
              ")" +
              " REFERENCES " +
              f.reference +
              "(ID)",
          })
      }
      sqls.push(...defs);
  });

  // sqls[sqls.length-1] = sqls[sqls.length-1].slice(0,-1);

  sqls.push({    
      sqlType: SQLType.FORMAT,
      sql:" )"
    });

  return sqls.flat();
};

