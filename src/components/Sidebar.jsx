import React, { useState } from 'react'
import './Sidebar.css'
import { GoKey, GoPerson } from 'react-icons/go';
import { FaBars } from 'react-icons/fa';
import { RxCube } from 'react-icons/rx';
import { BsWallet2 } from 'react-icons/bs';
import { CiDiscount1 } from 'react-icons/ci';
import { LuHelpCircle } from 'react-icons/lu';
import { TbSettings2 } from 'react-icons/tb';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
        console.log(open);
    };

    const sideBarData = [
        {
            title: "Dashboard",
            icon: <GoKey />,
            link: '/'
        },
        {
            title: "Product",
            icon: <RxCube />,
            link: '/product'
        },
        {
            title: "Customers",
            icon: <GoPerson />,
            link: '/customer'
        },
        {
            title: "Income",
            icon: <BsWallet2 />,
            link: '/income'
        },
        {
            title: "Promote",
            icon: <CiDiscount1 />,
            link: '/promote'
        },
        {
            title: "Help",
            icon: <LuHelpCircle />,
            link: '/help'
        },
    ]

    const handleClick = (link) => {
        navigate(link)
    }

    return (
        <>
            <div className='top__icon'><FaBars className='showbar' onClick={toggle} /></div>
            <div>
                <div className={open ? 'sidebar active' : 'sidebar'}>
                    <div style={{ color: 'white', alignItems: 'center', display: 'flex', justifyContent: 'center', gap: '5px', fontSize: '25px', fontWeight: 'bold', padding: '10px' }}><TbSettings2 /> Dashboard</div>
                    <div>
                        <ul className='sidebar__list'>
                            {sideBarData.map((item, key) => {
                                return (
                                    <li key={key} onClick={() => handleClick(item.link)} className='row'
                                        id={window.location.pathname == item.link ? "active" : ''}
                                    >
                                        <div id='icon'>{item.icon}</div>
                                        <div id='title'>{item.title}</div>
                                        <div id='arrow' style={{ display: window.location.pathname == item.link ? 'none' : '' }}><IoIosArrowForward /></div>
                                    </li>
                                )
                            })}
                        </ul>

                        <div className={`profile__info ${open ? 'active' : ''}`}>

                            <div className='mid_info'>
                                <div className='profile'>
                                    <img src="./images/p1.jpg" alt="" />
                                </div>
                                <div className='info'>
                                    <div>Evano</div>
                                    <div>Project Manager</div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
                <div>

                </div>

                {/* mobile */}
                <div className={`mob__view ${open ? 'active' : ''}`}>
                    <ul className='sidebar__list'>
                        {sideBarData.map((item, key) => {
                            return (
                                <li key={key} onClick={() => handleClick(item.link)} className='row'
                                    id={window.location.pathname == item.link ? "active" : ''}
                                >
                                    <div id='icon'>{item.icon}</div>
                                    <div id='title'>{item.title}</div>
                                    <div id='arrow' style={{ display: window.location.pathname == item.link ? 'none' : '' }}><IoIosArrowForward /></div>
                                </li>
                            )
                        })}
                         <div className='profile' style={{marginLeft:'18px', cursor:'pointer'}}>
                                    <img src="./images/p1.jpg" alt="" />
                                </div>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Sidebar