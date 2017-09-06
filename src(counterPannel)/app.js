import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './counter.js'
import './app.css'

class App extends React.Component{
    constructor(props){
        super(props);
        this.initValues=[1,28]
        this.state={total:this.initValues.reduce((a,b)=>a+b)}
        this.onCounterUpdate=this.onCounterUpdate.bind(this)
    }
    onCounterUpdate(pre,now){
        const change=now-pre;
        this.setState({total:this.state.total
        +change})
    }
    render(){
        return <div>
        <Counter initValue={this.initValues[0]} onUpdate={this.onCounterUpdate} caption='First'/>
        <Counter initValue={this.initValues[1]} onUpdate={this.onCounterUpdate} caption='Second'/> 
        <hr/>
        <span className='total'>Total:{this.state.total}</span>
        </div>
    }
}

ReactDOM.render(<App/>,document.getElementById('app'))