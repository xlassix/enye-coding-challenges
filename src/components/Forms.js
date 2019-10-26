import React,{useState} from "react"
import { Form, Row,Col, Icon, Input, Button ,DatePicker,message} from 'antd';
import {useDispatch} from "react-redux"


const Forms =(props)=>{
    //initialise dispatcher
    const dispatch=useDispatch();
    //initialise usestate to store DatePicker object
    const [birthday,setbirthday]=useState(null)
    //initialise usestate to store user detail
    const [state,setState]=useState({
        first_name: "",
        last_name: "",
        birthday: null,
        Hobby: null,
        age:null,
    })

    // create a function to handle keystrokr enters to update user_state variables
    const handleOnChange=(event)=>{
        //set state depending on the name of field being edited with event.target
        setState({ ...state,
            [event.target.name]:event.target.value
        })
    }

    // create a function to handle submit event
    const handleOnSubmit=(event)=>{
        //dispatcher used directly to for action since the application dispatch only on action(NOTE: NOT ideal)
        dispatch({type:"ADD_USER",user:state})
        //deactivate the default action of a submit button(post,get, etc) to refresh page
        event.preventDefault();
        message.loading('Saving to database..', 0.25).then(() => message.success('Finished saving', 0.75))      
        //clear fields
        setState({
            first_name:"",
            last_name:"",
            Hobby: null,
            age:null,
        })
        setbirthday(null)
        
    }
    //create a function to get age from date provided and format date 
    const view=(event)=>{
        var m= new Date(event._d)
        const options = {
            day: 'numeric',
            month: 'long',
            year:"numeric"
          };
        var diff = new Date(new Date() - m)
        setbirthday(event)
        setState({ ...state,
            birthday:(new Intl.DateTimeFormat('en-US', options).format(m)),
        age:(diff.getUTCFullYear() - 1970)})
    }
        return(
            //row used to structure and provide a responsive build for different screen sizes
            <Row md={18} xl={12}>
                <Col>
                        <Form onSubmit={handleOnSubmit} >
                            <Form.Item> 
                                <Row gutter={12}>
                                    <Input  type="text" onChange={handleOnChange} value={state.first_name} name="first_name" required={true} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}placeholder="First Name"/>
                                </Row>
                            </Form.Item>
                            <Form.Item>
                                <Row gutter={12}>
                                    <Input type="text" onChange={handleOnChange} value={state.last_name} name="last_name" required prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}placeholder="Last Name"/>
                                </Row>
                            </Form.Item>
                            <Form.Item >
                                <Row gutter={12}>
                                    <Col span={10}>
                                        <label  htmlFor="birthday" > Date of Birth:</label>
                                    </Col>
                                    <Col span={10}>
                                        <DatePicker id="birthday" span={24}  required onChange={view} value={birthday}/>
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item >
                                <Row gutter={12}>
                                    <Col span={10}>
                                        <label htmlFor="age" > Age:</label>
                                    </Col>
                                    <Col span={10}>
                                        <Input type="text" required id="age" value={state.age} placeholder="Age" prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }}/>}></Input>
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item>
                                <Row gutter={12}>
                                    <Col span={10}>
                                        <label  htmlFor="Hobby" > Hobby:</label>
                                    </Col>
                                    <Col span={10}>
                                        <Input  type="TextArea" onChange={handleOnChange} value={state.Hobby} name="Hobby"  size="large" prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}placeholder="Hobby" required/>
                                    </Col>
                                </Row >
                            </Form.Item>
                            <Form.Item >
                                <Button type="primary"  shape="round" size="large" htmlType="submit"  className="login-form-button center" style={{width:"120px",marginLeft:"calc(50% - 60px)"}} >Save</Button>
                            </Form.Item>
                        </Form>
                    </Col>
            </Row>
        )
    }
export default Forms




