import React from 'react'
import './counter.css'

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={count:props.initValue}
        this.plus=this.plus.bind(this)
        this.minus=this.minus.bind(this)
    }

    plus(){
        const pre=this.state.count
        const now=this.state.count+1
        this.setState({count:this.state.count+1})
        this.props.onUpdate(pre,now)
    }

    minus(){
        const pre=this.state.count
        const now=this.state.count-1
        this.setState({count:this.state.count-1})
        this.props.onUpdate(pre,now)
    }

    render(){
        return <div>
            <span className='counter-show'>{this.props.caption} counter:{this.state.count}</span>
             <button onClick={this.plus} className='btn'>+</button>
            <button onClick={this.minus} className='btn'>-</button>
            </div>
    }

}

export default Counter