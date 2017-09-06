import React from 'react'
import './input.css'
export default (props)=>{
    return <form onSubmit={props.onSubmit}>
        <label><b className='title'>待办事项：</b></label>
        <input type='text' className='form-control' onChange={props.onChange} value={props.value}/>
        <button className='btn btn-primary'>添加</button>
        </form>
}