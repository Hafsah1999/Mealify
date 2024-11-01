import React from 'react'
import Navbar from './navbar';


const MainLayout = ({ children }) => {
    return (
        <>
           <div className="bg-[#f4f1de]">{children}</div> 
        </>
    )
}

export default MainLayout;