
import { Component } from "react";


class Counterclass extends Component{
    constructor(props){
        super(props);
        this.state={
            initialValue : 4
        }
    }
    count =0;
    handleIncrement = () =>{
        this.setState({initialValue : this.state.initialValue +1})
        this.count++;
    }
    render(){
        return(
            <>
            <h3>{this.props.countercomponent} Application</h3>
            <h4>Initial Value:{this.state.initialValue} </h4>
            <button onClick={this.handleIncrement}>Increment</button> &nbsp;
               <button onClick={()=>{this.setState({initialValue:this.state.initialValue -1});this.count--;}}>Decrement</button> &nbsp;
               <button onClick={()=>{this.setState({initialValue:this.state.initialValue-this.count});this.count=0}}>Reset</button> 
            </>
        )
    }
    }
    export default Counterclass;