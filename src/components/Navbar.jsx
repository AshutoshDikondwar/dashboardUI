import React, { useState } from 'react'
import './Navbar.css'
import { AiOutlineSearch } from 'react-icons/ai';


const Navbar = () => {
    const[serachOpen,setSearchOpen]=useState(false)
    return (
        <nav>
            <div>
                <div style={{color:'white'}}>Hello Shahrukh👋,</div>
                <div>
                    <span><AiOutlineSearch  className='search__icon' onClick={()=>setSearchOpen(!serachOpen)} style={{color:'wheat'}} /> </span>
                    <input type="text" name="" id="" placeholder='search' style={{backgroundColor:'rgba(255, 255, 255, 0.768)'}} />
                </div>
            </div>
            <div className={`opSearch ${serachOpen?'active':''}`}>
                <input type="text" placeholder='seacrh' />
                <button onClick={()=>setSearchOpen(false)}>search</button>
            </div>
        </nav>
    )
}

export default Navbar