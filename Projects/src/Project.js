import React from 'react';
import Todo from './Todo.js';
import './Project.css';
import {Link} from 'react-router-dom';

const app_style={
    border:'none',
    width:'200px',
    height:'200px',
    boxShadow:'2px 2px 2px grey',
    borderRadius:'10px',
    display:'flex',
    jsustifyContent:'center',
    alignItems:'center',
    margin:'20px',
    backgroundColor:'purple',
}

const btn_style={
    border:'none',
    height:'100px',
    width:'150px',
    borderRadius:'10px',
    backgroundColor:'transparent',
    fontWeight:'bold',
    fontSize:'20px'

}


export default function Project(){
    
    return(
        <div>
            <h2 style={{textAlign:'center', backgroundColor:'purple', color:'white', padding:'2px' }}>PROJECTS</h2>
            <marquee>welcome to David's website</marquee>
        <div className='project-container'>

            <div className='main'>
                
                <div className='todoapp' style={app_style}>
                    <Link to="/todoapp" >
                        <button className='btn' style={btn_style}>Todo App</button>
                    </Link>
                </div>
                <div className='todoapp' style={app_style}>
                    <Link to="/weatherapp" >
                        <button className='btn' style={btn_style}>Weather Forecasting App</button>
                    </Link>
                </div>
                <div className='todoapp' style={app_style}>
                    <Link to="/paytm" >
                        <button className='btn' style={btn_style}>Paytm</button>
                    </Link>
                </div>

            </div>
            
        </div>
        
        </div>
    )
}