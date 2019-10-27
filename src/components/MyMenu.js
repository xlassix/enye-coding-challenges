import React from 'react';
import { Menu, Icon } from 'antd';
import {Link} from "react-router-dom"

const MyMenu=({mode})=> {
  console.log(mode)
  const alignment = mode? "horizontal":"vertical"
    return (
      <Menu mode={alignment}>
          <Menu.Item key="form">
            <Link to="/">Form</Link>
          </Menu.Item>
          <Menu.Item key="table">
            <Link to="/table">User Table</Link>
          </Menu.Item>
      </Menu>
    );
}
export default MyMenu;