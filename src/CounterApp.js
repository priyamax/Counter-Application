import React,{useEffect,useState} from 'react';
import './App.css';
import CardComponent from "./Card";

var count=0;

function CounterAppFun(props) {
 const [InitialValue,setInitialValue] = useState(5);
 const [Toggle,setToggle]=useState(true);
 useEffect(()=>{
     console.log("Mounting Phase");
 },[])
 useEffect(()=>{
     console.log(" Updating Phase")
 },[InitialValue])

 const togglefun =() =>{
    setToggle(!Toggle);
}
    return (
      <div className=".App">
          <br></br>
            <h2>Functional Component</h2>
           <CardComponent heading="CounterApplication" subheading="Basic card" description='Counter application using React Hooks' Togglefunction={togglefun} />
            { Toggle ? 
           <> <h3>{props.CntApp} Application</h3>
            <h4>Initial value :{InitialValue}</h4>
            <button onClick={()=> {setInitialValue(InitialValue+1); count++;}}>Incremental</button> &nbsp;
            <button onClick={()=>{ setInitialValue(InitialValue-1); count--;}}>Decrement</button> &nbsp;
            <button onClick={()=>{setInitialValue(InitialValue-count); count=0;}}>Reset</button></>
            :
            <></>
            }
           
      </div>
    );
  }
  export default CounterAppFun;
 
  