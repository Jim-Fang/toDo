import React from 'react'
import List from './list.js'
import Input from './input.js'
import './ToDoApp.css'

class ToDoApp extends React.Component{
    constructor(props){
        super(props)
        this.state={list:[],newtodo:''}
        this.onInputChange=this.onInputChange.bind(this)
        this.onInputSubmit=this.onInputSubmit.bind(this)
        this.onItemClick=this.onItemClick.bind(this)
        this.onItemDelete=this.onItemDelete.bind(this)
    }
  
    onInputChange(event){
        this.setState({newtodo:event.target.value})
    }
    onInputSubmit(event){
        event.preventDefault()
        this.setState((previousState)=>
        ({list:[...previousState.list,
            {item:previousState.newtodo,done:false}],newtodo:''}))
    }

    onItemClick(i){
        this.setState((previousState)=>
        ({list:[...previousState.list.slice(0,i),
            Object.assign({},previousState.list[i],{done:!previousState.list.done}),
            ...previousState.list.slice(i+1)]}))
    }

    onItemDelete(i){
        this.setState((previousState)=>
        ({list:[...previousState.list.slice(0,i),...previousState.list.slice(i+1)]}))
    }

    render(){
        return <div className='container'>
            <Input onChange={this.onInputChange} onSubmit={this.onInputSubmit}
             value={this.state.newtodo}/>
            <List listItems={this.state.list} onItem={this.onItemClick} 
            onDelete={this.onItemDelete}/>
            </div>
    }
}

export default ToDoApp 