import {Link} from 'react-router-dom'

export default function Navbar() {
    return(
        <>
        <div className='flex justify-between items-center'>

            <div className='flex ml-10'>
                <div className='ml-10 group'>
                    <Link to="/" className='text-xl '>Home</Link>
                    <div className='mt-1 w-0 h-1 bg-white group-hover:w-full transition-all duration-300'></div>
                </div>                
                <div className='ml-10 group'> 
                    <Link to="/shop" className='text-xl '>Shop</Link> 
                    <div className='mt-1 w-0 h-1 bg-white group-hover:w-full transition-all duration-300'></div>
                </div>
            </div>

            <div>
                <i className="fa-solid fa-cart-shopping cursor-pointer text-3xl transform hover:scale-150 duration-500 "></i>
            </div>
        </div>
            
        </>
    )
}