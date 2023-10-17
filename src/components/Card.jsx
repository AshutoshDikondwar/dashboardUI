import React from 'react'
import './Card.css'
import { CiDiscount1 } from 'react-icons/ci';
import { PiWallet } from 'react-icons/pi';
import { BiNotepad } from 'react-icons/bi';
import { RiMoneyDollarCircleLine,RiShoppingBasketLine } from 'react-icons/ri';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';


const Card = () => {
    return (
        <div className='main_container'>

            <div className='container'>
                <div className='icon1'>
                    <RiMoneyDollarCircleLine className='mid_icon' />
                </div>
                <div className='right__info'>
                    <div style={{ color: '#ebe2b9' }}>Earning</div>
                    <h2>$198k</h2>
                    <div><span style={{ color: '#03fc0f', fontWeight: 'bold' }}><AiOutlineArrowUp /> 37.8%</span> <span style={{ color: '#ebe2b9' }}>this month</span>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='icon2'>
                    <BiNotepad className='mid_icon' />
                </div>
                <div className='right__info'>
                    <div style={{ color: '#ebe2b9' }}>Orders</div>
                    <h2>$2.4k</h2>
                    <div><span style={{ color: '#fc0314', fontWeight: 'bold' }}><AiOutlineArrowDown /> 2%</span> <span style={{ color: '#ebe2b9' }}>this month</span>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='icon3'>
                    <PiWallet className='mid_icon' />
                </div>
                <div className='right__info'>
                    <div style={{ color: '#ebe2b9' }}>Balance</div>
                    <h2>$2.4k</h2>
                    <div><span style={{ color: '#fc0314', fontWeight: 'bold' }}> <AiOutlineArrowDown /> 2%</span> <span style={{ color: '#ebe2b9' }}>this month</span>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='icon4'>
                    <RiShoppingBasketLine className='mid_icon'/>
                </div>
                <div className='right__info'>
                    <div style={{ color: '#ebe2b9' }}>Total sales</div>
                    <h2>$89k</h2>
                    <div><span style={{ color: '#03fc0f', fontWeight: 'bold' }}><AiOutlineArrowUp/> 11%</span> <span style={{ color: '#ebe2b9' }}>this month</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card