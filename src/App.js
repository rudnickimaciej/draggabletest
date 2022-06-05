import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";
import {Line, SteppedLineTo}  from "react-lineto";
import Draggable from "react-draggable";
import Relation from "./components/Relation";
import Header from "./components/UI/Header";
import Editor from "./components/UI/Editor";
import {Helmet} from "react-helmet";

function App() {

  //let sqls = window['generate'];
  return (
    <div className="App">
      <div>    
        <Header/>
        <Editor/>
        <Helmet>
        <script src=
    "./sqlGenerator/sqlGenerator.js" 
        type="text/javascript" />
        </Helmet>
       <Relation x1 ={50} y1 ={50} x2 ={350} y2 ={350} />
      </div>
    </div>

    // <Line x0={10} y0={0} x1={10} y1={10}  />

  );
}

export default App;
