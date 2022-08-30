import { Link } from 'react-router-dom'


function NavBar() {

    return (
        <div>
            <div className='old_navbar'>
                <Link to="/open-orders">
                    <button className='box'>Open Orders</button>
                </Link>
                <Link to="/completed-orders">
                    <button className='box'>Completed Orders</button>
                </Link>
                <Link to="/users/:id/edit">
                    <button className='box'>Profile</button>
                </Link>
                <Link to="/help">
                    <button className='box'>Help</button>
                </Link>
            </div>
            <br></br>
        </div>

  )
}

export default NavBar



// https://www.youtube.com/watch?v=CXa0f4-dWi4 at 23:22
// https://react-icons.github.io/react-icons/search?q=io



    // import {useState} from 'react'
    // import * as FaIcons from "react-icons/fa"
    // import * as AiIcons from "react-icons/ai"
    // import { SidebarData } from './SidebarData'
    // import './Navbar.css';
    // import { IconContext } from 'react-icons'

    // const [sidebar, setSidebar] = useState(false)
    // const showSidebar = () => setSidebar(!sidebar)

    // <>
    // <IconContext.Provider value={{color:'#fff'}}>
    //     <div className='navbar'>
    //         <Link to='#' className='menu-bars'>
    //             <FaIcons.FaBars onClick={showSidebar}/>
    //         </Link>
    //     </div>
    //     <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
    //         <ul className='nav-menu-items' onClick={showSidebar}>
    //             <li className="navbar-toggle">
    //                 <Link to="#" className='menu-bars'>
    //                     <AiIcons.AiOutlineClose />
    //                 </Link>
    //             </li>
    //             {SidebarData.map((item,index) => {
    //                 return (
    //                     <li key={index} className={item.cName}>
    //                         <Link to={item.path}>
    //                             {item.icon}
    //                             <span>{item.title}</span>
    //                         </Link>
    //                     </li>
    //                 )
    //             })}
    //         </ul>
    //     </nav>
    //     </IconContext.Provider>
    // </>

    // in index.css 
    //  * {
    // box-sizing: border-box;
    // margin: 0;
    // padding: 0;
    // font-family: 'Merienda', sans-serif;
    // } 