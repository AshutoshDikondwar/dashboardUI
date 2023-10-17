import React from 'react'
import './Product.css'

const Product = () => {
    return (
        <div className='bottom'>
            <div className='top'>
                <div>Product Sell</div>
                <div className='top_right'>
                    <input type="text" placeholder='search' />
                    <div style={{color:'#bcb19ea9'}}>Last 30 days</div>
                </div>
            </div>
            <table width='100%' >
                <thead>
                    <th style={{textAlign:'left'}}>Product Name</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Total Sales</th>
                </thead>
                <tbody>
                    <tr>
                        <td className='bottom_left'>
                            <img src="./images/f2.jpg" alt="" />
                            <div>Abstract 3D  <div style={{color:'#bcb19ea9'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div></div>
                           
                        </td>
                        <td style={{textAlign:'center'}}>32 in stock</td>
                        <td style={{textAlign:'center', fontWeight:'bold'}}>$45.99</td>
                        <td style={{textAlign:'center'}}>20</td>
                    </tr>
                    <tr>
                        <td className='bottom_left'>
                            <img src="./images/f1.jpg" alt="" />
                            <div>Abstract 3D  <div style={{color:'#bcb19ea9'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div></div>
                           
                        </td>
                        <td style={{textAlign:'center'}}>32 in stock</td>
                        <td style={{textAlign:'center', fontWeight:'bold'}}>$45.99</td>
                        <td style={{textAlign:'center'}}>20</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Product