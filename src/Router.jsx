import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Error from './pages/util pages/Error.jsx'


export default function Router({setIsCart, isCart, 
                                currentCart, setCart, total,
                                menItems, womenItems, quantity}) {

    const router = createBrowserRouter([
        {
            path: "/",
            index: true,
            element: <Home/>,
            errorElement: <Error/>
        },
        {
            path: "shop",
            element: <Shop setIsCart = {setIsCart} isCart={isCart} 
            currentCart={currentCart} setCart={setCart} total={total}
            menItems={ menItems } womenItems={ womenItems } quantity = { quantity }/>,
        },

    ])


    return (
        <RouterProvider router={router}/>
    )
}