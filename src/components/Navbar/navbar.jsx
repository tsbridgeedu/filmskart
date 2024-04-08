import React, { useState } from "react";
import "./navbar.css";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { navBarLinks } from "../../../constants/constant";
import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import PermMediaIcon from '@mui/icons-material/PermMedia';

[
{
  title: "Home",
  icon: <HomeIcon/>,
  link:"/home"
},
{
  title: "MailBox",
  icon: <MailIcon/>,
  link:"/mailbox"
},{
  title: "Analytics",
  icon: <AssessmentIcon/>,
  link:"/analytics"
},{
  title: "Dashboard",
  icon: <DashboardIcon/>,
  link:"/dashboard"
},
{
  title: "Friends",
  icon: <GroupIcon/>,
  link:"/friends"
},{
  title: "Images",
  icon: <PermMediaIcon/>,
  link:"/images"
},
];


const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  const mobileMenu = ()=> {setMenuToggle(!menuToggle)}
  console.log(menuToggle);
  return (
    <div>
      <header>
        <div className="menu" onClick={mobileMenu}>
          < RiMenu2Fill />
        </div>
        { menuToggle && <li key= {key} onClick={()=> {window.location.pathname = val.link}}>
          {" "}
          <div> {val.icon}</div>{""}
          <div>
            {val.title}
          </div>
          </li>
          }
          
        <ul className="menu-options">
          <li>
            <a href="#">Women's Fashion</a>
          </li>
          <li>
            <a href="#">Men's fashion</a>
          </li>
          <li>
            <a href="#">Electronics</a>
          </li>
          <li>
            <a href="#">Home & Electronics</a>
          </li>
        </ul>
        <div className="logo_container">
          <a href="#">
            <img className="store_logo" src="/logo.jpeg" alt="myntra logo" />
          </a>
        </div>

        <nav className="nav_bar">
          {navBarLinks.map((Element) => {
            return (
              <div key={Element.link} className="activeHandler">
                <NavLink
                  className="navElements"
                  key={Element.link}
                  to={Element.link}
                >
                  {Element.name}
                </NavLink>
              </div>
            );
          })}
        </nav>

        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">
            <FaSearch />
          </span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>

        <div>
          <a href="#">
            <button className="log">Login</button>
          </a>
        </div>

        <div className="action_bar">
          <div className="action_container">
            <a href="#" className="material-symbols-outlined action_icon">
              <FaRegHeart />
            </a>
            <span className="action_name">Wishlist</span>
          </div>

          <div className="action_container">
            <a href="#" className="material-symbols-outlined action_icon">
              <FiShoppingCart />
            </a>
            <span className="action_name">Cart</span>
          </div>
        </div>
      </header>
      <hr />
    </div>
  );
};

export default Navbar;
