import Header from "../components/Header/Header"
import Men from './clothing pages/Men.jsx';
import Women from './clothing pages/Women.jsx';
import Cart from '../components/cart'
import Checkout from '../components/checkout';

import { useEffect, useState } from "react";

export default function Shop({setIsCart, isCart, 
    currentCart, setCart, total,
    menItems, womenItems, quantity}){

    const [isMen, setIsMen] = useState(true);
    const [isCheckout, setCheckout] = useState(false);
    const handleMen = () =>{
        setIsMen(true);
    }

    const handleWomen = () =>{
        setIsMen(false);
    }

    return(
        <>
            <Header setIsCart = {setIsCart} showCart={true} quantity = {quantity} />
            {isCheckout && <Checkout total={total}/>}
            <Cart isCheckout={isCheckout} setCheckout={setCheckout} isCart={isCart} setIsCart = {setIsCart} currentCart={currentCart} setCart={setCart} total={total}/>
            <section id="shop" className="md:p-16 h-[full]">
                <div className="flex mt-5 md:mt-0 ml-5 md:ml-0">
                    <h1 className={`cursor-pointer ${isMen ? "underline underline-offset-8" : ""}`} onClick={handleMen}>Men's</h1>
                
                    <h1 className="ml-4">/</h1>

                    <h1 className={`cursor-pointer ${!isMen ? "underline underline-offset-8" : ""} ml-4`} onClick={handleWomen} >Women's</h1>
                </div>
                {isMen ? <Men items={ menItems } currentCart={currentCart} setCart={setCart}/> : <Women items={ womenItems } currentCart={currentCart} setCart={setCart}/>}
            </section> :
        </>
    )
}