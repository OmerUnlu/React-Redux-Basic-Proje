import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SlArrowUp,SlArrowDown } from "react-icons/sl";
import {clearAll, clearId, increase,decrease, restartCard} from '../Control/CardSlice'

const CourseList = () => {
    
    const { cartItems, quantity, total,  } = useSelector((store) => store.cart)
    const dispatch = useDispatch();
    const dispatchClearId = useDispatch();
    const dispatchIncrease = useDispatch();
    const dispatchDecrease = useDispatch();
    return (
        <>
            <main className='coursesContainer'>
                {quantity < 1 ? (
                    <div className='quantity0'>
                        <h1>Sepetim</h1>
                        <h2>Sepetinizde Ürün Bulunmamaktadır...</h2>
                        <button onClick={() => dispatch(restartCard())}>Sepeti Yeniden Getir</button>
                    </div>

                ) :
                    cartItems.map((item) => {
                        return (
                            <div className='courseContainer' key={item.id}>
                                <div className='imgDiv'>
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div className='contentDiv'>
                                    <h2>{item.title}</h2>
                                    <p>{item.price} TL</p>
                                    <button onClick={() =>{dispatchIncrease(increase(item.id))}} className='upAndDown'><SlArrowUp/></button> 
                                        <p className='itemQuantity'  >{item.quantity}</p>
                                     <button onClick={() =>{dispatchDecrease(decrease(item.id))}}  className='upAndDown'><SlArrowDown/></button>
                                    <button className='deleteIcon' onClick={() => {dispatchClearId(clearId(item.id))} }>Sil</button>
                                </div>
                            </div>
                        )
                    })}
            </main>
            
            <footer>
                <hr />
                <div>
                    <h4>Toplam Tutar: <span>{total} TL</span></h4>
                </div>
                <button onClick={() => dispatch(clearAll())}>Temizle</button>
            </footer>
        </>
    )
}

export default CourseList