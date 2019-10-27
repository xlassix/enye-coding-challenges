import React,{useState} from "react"
import { Form, Row,Col,message, Icon, Input, Button ,DatePicker} from 'antd';


const Forms =(props)=>{
    const [state,setState]=useState({
        first_name: "",
        last_name: "",
        birthday: null,
        Hobby: null,
        age:null
    })
    const [birthday,setbirthday]=useState(null)

    const handleOnChange=(event)=>{
        setState({ ...state,
            [event.target.name]:event.target.value
        })
    }
    const handleOnSubmit=(event)=>{
        props.add_user(state)
        event.preventDefault();
        message.loading('Saving to user...', 0.25).then(() => message.success('User Saved', 0.75))
        setState({
            first_name:"",
            last_name:"",
            birthday: null,
            Hobby: null,
            age:null,
        })
        setbirthday(null)
        
    }
    const view=(event)=>{
        var m= new Date(event._d)
        const options = {
            day: 'numeric',
            month: 'long',
            year:"numeric"
          };
        var diff = new Date(new Date() - m)
        setState({ ...state,
            birthday:(new Intl.DateTimeFormat('en-US', options).format(m)),
        age:(diff.getUTCFullYear() - 1970)})
        setbirthday(event)

    }
        return(
            <Row justify={"center"}>
                        <Form onSubmit={ handleOnSubmit}>
                        <h4 className="blue-text center">Entry form</h4>
                            <Form.Item> 
                                <Row  gutter={2}>
                                    <Input  type="text" onChange={handleOnChange} value={ state.first_name} name="first_name" required prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}placeholder="First Name"/>
                                </Row>
                            </Form.Item>
                            <Form.Item>
                                <Row  gutter={2}>
                                    <Input type="text" onChange={ handleOnChange} value={ state.last_name} name="last_name" required prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}placeholder="Last Name"/>
                                </Row>
                            </Form.Item>
                            <Form.Item >
                                <Row  gutter={2}>
                                    <Col span={10}>
                                        <label className="left" htmlFor="birthday" > Select Date:</label>
                                    </Col>
                                    <Col span={10}>
                                        <DatePicker id="birthday" span={24}  required onChange={ view} value={ birthday}/>
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item >
                                <Row  gutter={2}>
                                    <Col span={10}>
                                        <label className="left" htmlFor="age" > Age:</label>
                                    </Col>
                                    <Col span={10}>
                                        <Input type="text"  id="age" value={ state.age} placeholder="Age" prefix={<Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }}/>}></Input>
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item>
                                <Row  gutter={2}>
                                    <Col span={10}>
                                        <label className="left" htmlFor="Hobby" > Hobby:</label>
                                    </Col>
                                    <Col span={10}>
                                        <Input type="text" onChange={ handleOnChange} value={ state.Hobby} name="Hobby" required size="large" prefix={<Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />}placeholder="Hobby"/>
                                    </Col>
                                </Row >
                            </Form.Item>
                            <Form.Item className="center">
                                <Button type="primary"  shape="round" size="large" onClick={ handleOnSubmit} className="login-form-button center" style={{width:"100px",marginLeft:"calc(50% - 50px)"}}>Save</Button>
                            </Form.Item>
                        </Form>
            </Row>
        )
    }
export default Forms

