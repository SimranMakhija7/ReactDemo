import React, {Component} from "react"

class NewTodo extends Component{
    constructor(){
        super();
        this.state={
            NewTodo:{
                key:'',
                text:''
            }
        }
    }
    
    render(){
        return(
        <form onSubmit={this.props.AddTodo(this.state.NewTodo)}>
            <input type="text" placeholder="New Todo" value={this.state.NewTodo.text} onChange={
                (event)=>{this.setState({
                NewTodo:{
                    key: event.target.value,
                    text:event.target.value
                }
            })}}/>
            <button type="submit">Submit</button>
        </form>
        )}
}

export default NewTodo