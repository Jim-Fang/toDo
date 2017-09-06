import ToDoApp from './components/ToDoApp'
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    render(){
        return <div><ToDoApp/></div>
    }
}

ReactDOM.render(<App/>,document.getElementById('app'))