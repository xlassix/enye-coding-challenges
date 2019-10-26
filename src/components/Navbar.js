import { Drawer, Button,Row,Col,Layout,Menu,Icon } from 'antd';
import {NavLink,Link} from "react-router-dom"
import React,{useState} from "react"
const Navbar=(props)=> {
  //initialise state for visibility
  const [state,setState]=useState({
      visible: false
    })
  const toggle_visible = () => {
    setState({
      visible: !state.visible,
    });
  };
  const { Header } = Layout;
    return (
      <Layout>
        <Header>
          <Row gutter={2}>
            <Col span={12}>
              <h2 className="header-text center" style={{width:"120px",marginLeft:"calc(50% - 60px)"}}>React</h2>
            </Col>
            <Col span={8}>
              <Menu  theme="dark" mode="horizontal" className="right" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
                <Menu.Item key="1" > <NavLink to="/">Form</NavLink></Menu.Item>
                <Menu.Item key="2"> <NavLink to="/table">User Table</NavLink></Menu.Item>
              </Menu>
            </Col>
            <Col span={2} className="right">
            <Button className="center menulogo" type="primary" onClick={toggle_visible}><Icon type={state.visible ? 'menu-unfold' : 'menu-fold'} /> </Button>
            </Col>
          </Row>
        </Header>
            <Drawer title="Coding Challenge 1!" placement="right" closable={false}
                        onClose={toggle_visible}
                        visible={state.visible}
                        theme={"Dark"}>
                        <Menu mode="vertical">
                            <Menu.Item key="form">
                              <Link to="/">Form</Link>
                            </Menu.Item>
                            <Menu.Item key="table">
                              <Link to="/table">User Table</Link>
                            </Menu.Item>
                        </Menu>
                    </Drawer>
        </Layout>
    );
  }
export default Navbar;






