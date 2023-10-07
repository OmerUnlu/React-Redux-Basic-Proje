import React from 'react'
import {BsFillBasketFill} from 'react-icons/bs'
import {useSelector} from 'react-redux'

const NavBar = () => {
    const {quantity} = useSelector((store) => store.cart)
  return (
    <>
        <nav>
            <div className='navContainer'>
                <h2>Kurs Uygulaması</h2>
                <div>
                    <p>{quantity}</p>
                    <BsFillBasketFill className='navIcon'/>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar