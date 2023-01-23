import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Dropdown, Menu } from 'antd';
import "./index.scss"

const Header = () => {
  return <div id="header">
    <div className="container">
        <div className="header">
           <h2 className="logo">
            <NavLink to={"/"}>Notary</NavLink>
           </h2>
        <nav>
        <ul>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/"}>
                    <Dropdown
          overlay={(
            <Menu>
            <div className="blog">
            <Menu.Item key="0">
            Bankruptcy Law
            </Menu.Item>
            <Menu.Item key="1">
            Business Law
            </Menu.Item>
            <Menu.Item key="2">
            Civil Rights Law
            </Menu.Item>
            <Menu.Item key="2">
            Criminal Law
            </Menu.Item>
            <Menu.Item key="2">
            Immigration Law
            </Menu.Item>
        </div>
    </Menu>
          )}
          trigger={['hover']}>
          <a className="ant-dropdown-link" 
             onClick={e => e.preventDefault()}>
            Practice Areas
          </a>
        </Dropdown>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/add-customer"}>Add Customer</NavLink>
                </li>
                <li>
                    <NavLink to={"/"}>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/"}>Contact</NavLink>
                </li>
            </ul>
        </nav>
        </div>
    </div>


  </div>;
};

export default Header;
