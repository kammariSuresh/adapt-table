import React, { useState } from 'react';
// import logo from './logo.svg';
import { IoMoonOutline } from "react-icons/io5"
import { CiBellOn } from "react-icons/ci";
import { MdGTranslate,MdOutlineLocalShipping } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { BiRightArrow } from "react-icons/bi";
import { IoMdClose,IoMdSearch } from "react-icons/io";
import { LuRefreshCw } from "react-icons/lu";
import { FiPrinter } from "react-icons/fi";
import { LiaFileImportSolid, LiaTagSolid } from "react-icons/lia";
import { AiOutlineDashboard,AiFillFilter } from "react-icons/ai";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { GoListUnordered } from "react-icons/go";

import { RiExpandUpDownFill } from "react-icons/ri";

import { FaShareAlt } from "react-icons/fa";

import './App.css';

function App() {
  const [activeItem, setActiveItem] = useState('');
  const [activeBoardItem, setActiveBoardItem] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  const handleBoardItemClick = (itemName) => {
    setActiveBoardItem(itemName);
};

  return (
    <div className="App">
      <nav className="app-nav-bar">
        <div>
      
      <RxAvatar  className="App-logo"/> 
      
      </div>
      <div className='nav-header'>
      <IoMoonOutline /> 
      <CiBellOn /> 
      <MdGTranslate /> 
      <img src="" alt="avatar" />
      </div>
      
      </nav>
      <div className='App-main-container'>
      <header className="App-header">
                <div className="menu-icon" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`dashboard-container ${isMenuOpen ? 'active' : ''}`}>
                    <li onClick={() => handleBoardItemClick('Dashboard')} className={activeBoardItem === 'Dashboard' ? 'active' : ''}>
                        <p className='para-icons'><AiOutlineDashboard className='icons'/>Dashboard </p>
                    </li>
                    <li onClick={() => handleBoardItemClick('Inventory')} className={activeBoardItem === 'Inventory' ? 'active' : ''}>
                        <p> <LiaTagSolid className='icons'/> Inventory</p>
                    </li>
                    <li onClick={() => handleBoardItemClick('Orders')} className={activeBoardItem === 'Orders' ? 'active' : ''}>
                        <p> <GoListUnordered className='icons'/> Orders</p>
                    </li>
                    <li onClick={() => handleBoardItemClick('Shipping')} className={activeBoardItem === 'Shipping' ? 'active' : ''}>
                        <p><MdOutlineLocalShipping className='icons'/> Shipping</p>
                    </li>
                    <li onClick={() => handleBoardItemClick('Channel')} className={activeBoardItem === 'Channel' ? 'active' : ''}>
                        <p><FaShareAlt className='icons'/> Channel</p>
                    </li>
                </ul>
            </header>

      <div className='main-card-table-container'>
      <div>
                {activeBoardItem && 
                    <button className='close-button'>
                        {activeBoardItem} <IoMdClose onClick={() => setActiveBoardItem('')} />
                    </button>
                }
            </div>
      <div className='list-items-container-2'>
            <p className={`list-items1 ${activeItem === 'Pending' ? 'active' : ''}`} onClick={() => setActiveItem('Pending')}>Pending</p>
            <p className={`list-items1 ${activeItem === 'Accepted' ? 'active' : ''}`} onClick={() => setActiveItem('Accepted')}>Accepted</p>
            <p className={`list-items1 ${activeItem === 'AWB Created' ? 'active' : ''}`} onClick={() => setActiveItem('AWB Created')}>AWB Created</p>
            <p className={`list-items1 ${activeItem === 'Ready to Ship' ? 'active' : ''}`} onClick={() => setActiveItem('Ready to Ship')}>Ready to Ship</p>
            <p className={`list-items1 ${activeItem === 'Shipped' ? 'active' : ''}`} onClick={() => setActiveItem('Shipped')}>Shipped</p>
            <p className={`list-items1 ${activeItem === 'Completed' ? 'active' : ''}`} onClick={() => setActiveItem('Completed')}>Completed</p>
            <p className={`list-items1 ${activeItem === 'Cancelled' ? 'active' : ''}`} onClick={() => setActiveItem('Cancelled')}>Cancelled</p>
        </div>
        <div  className='main-container-card'>
          <div className='card-buttons-container'>
          <div>
            <button className='button-cards'><LiaFileImportSolid/> Import Orders</button>
            <button className='button-cards2'><BiRightArrow />Accept</button>
            <button className='button-cards2'><FiPrinter/>Print</button>
            </div>
            <button><LuRefreshCw className='refresh-button'/>Refresh</button>
            </div>
            <div className="table-container">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th></th>
                    <th><input type='checkbox'/></th>
                    <th>Channel <RiExpandUpDownFill /> <AiFillFilter/></th>
                    <th>Order No <RiExpandUpDownFill /> <IoMdSearch/></th>
                    <th>Order Date <RiExpandUpDownFill /> <IoMdSearch/></th>
                    <th>City <RiExpandUpDownFill /></th>
                    <th>Customer Name <IoMdSearch/></th>
                    <th>Order Value <RiExpandUpDownFill /></th>
                    <th>Status <RiExpandUpDownFill /></th>
                    <th>Operation </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>+</td>
                    <td><input type='checkbox'/></td>
                    <td><HiMiniShoppingBag className="bag"/></td>
                    <td>#TKN20203754</td>
                    <td>2022-05-04</td>
                    <td>Lucknow</td>
                    <td>Abhishek Dixit</td>
                    <td>0.00</td>
                    <td>Pending</td>
                    <td><select>
                      <option>Actions</option>
                      </select></td>

                  </tr>
                  <tr>
                    <td>+</td>
                    <td><input type='checkbox'/></td>
                    <td><HiMiniShoppingBag className="bag"/></td>
                    <td>#TKN20203754</td>
                    <td>2022-05-04</td>
                    <td>Lucknow</td>
                    <td>Abhishek Dixit</td>
                    <td>0.00</td>
                    <td>Pending</td>
                    <td><select>
                      <option>Actions</option>
                      </select></td>
                  </tr>
                  <tr>
                    <td>+</td>
                    <td><input type='checkbox'/></td>
                    <td><HiMiniShoppingBag className="bag"/></td>
                    <td>#TKN20203754</td>
                    <td>2022-05-04</td>
                    <td>Lucknow</td>
                    <td>Abhishek Dixit</td>
                    <td>0.00</td>
                    <td>Pending</td>
                    <td><select>
                      <option>Actions</option>
                      </select></td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
        </div>

      </div>
      </div>
    </div>
  );
}

export default App;
