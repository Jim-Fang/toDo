import React from 'react'
import './list.css'

export default (props)=>{
    const list=props.listItems.map(
    (ele,i)=>(<li key={i} className='li'><span style={ele.done 
    ? {textDecoration:'line-through',fontSize:'20px'} 
    : {textDecoration:'none',fontSize:'20px'}} 
    onClick={()=>props.onItem(i)}>{i+1}.{ele.item}</span>
    <button onClick={()=>props.onDelete(i)}>×</button>
    </li>))
    return <div className='itemContainer'>
        <ul className='ul'>{list}</ul>
        </div>
}
