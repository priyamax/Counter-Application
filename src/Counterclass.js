import './App.css';
import { Component } from "react";
import CardComponent from "./Card";


class Counterclass extends Component{
    constructor(props){
        super(props);
        this.state={
            initialValue : 4,
            toggle:true
        }
    }
    count =0;

    componentDidMount(){
        console.log('class component mounting phase');
    }
   
    componentDidUpdate(){
        console.log('class component updating phase');
    }

    handleIncrement = () =>{
        this.setState({initialValue : this.state.initialValue +1})
        this.count++;
    }
    togglefunctionality =() =>{
        this.setState({toggle:(!this.state.toggle)})
    }
    render(){
        return(
            <>
            <div class=".App">
            <CardComponent heading="Cardcomponent" subheading="Basic card" description='Counter application using buttons' Togglefunction={this.togglefunctionality}/>
            {this.state.toggle ?
           <> <h3>{this.props.countercomponent} Application</h3>
            <h4>Initial Value:{this.state.initialValue} </h4>
            <button onClick={this.handleIncrement}>Increment</button> &nbsp;
               <button onClick={()=>{this.setState({initialValue:this.state.initialValue -1});this.count--;}}>Decrement</button> &nbsp;
               <button onClick={()=>{this.setState({initialValue:this.state.initialValue-this.count});this.count=0}}>Reset</button> </>
               :
               <></>}
            </div>
            </>
        )
    }
    }
    export default Counterclass;