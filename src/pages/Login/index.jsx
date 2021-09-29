import React from 'react'
import {
  Form,
  Input,
  Button,
  message,
  } from 'antd'
import { UserOutlined, LockOutlined} from '@ant-design/icons';
import { Redirect } from 'react-router'
import {login} from '../../api/index'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import logo from '../../assets/images/logo.png'
import './login.less'

export default function Login(props) {

  // 如果用户已经登陆, 自动跳转到管理界面
  const user = memoryUtils.user
  if(user && user.user_id) {
    return <Redirect to='/'/>
  }

  const Item = Form.Item
  const onFinish = async (values)=>{
    console.log('Success', values);
    const {data} = await login(values);
    if(data.code === 0){
      message.success('登录成功');
      console.log(data,'data');
      memoryUtils.user = data.user // 保存在内存中
      storageUtils.saveUser(data.user) // 保存到local中
      props.history.replace('/')
    }else{
      message.error('登录失败')
    }
  };
  const onFinishFailed = (values)=>{
    console.log('Failed', values);
  };
  return (
    <div className="login">
      <header className="login_header">
        <img src={logo} alt="logo"/>
        <h1>React 项目: 后台管理系统</h1>
      </header>
      <section className="login_content">
        <h3>用户登陆</h3>
        <Form 
          onFinish={onFinish}
          onFinishFailed={onFinishFailed} 
          className="login_form">
          <Item 
            name='user_name'
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
            >
            <Input prefix={<UserOutlined />}
            placeholder="用户名"/>
          </Item>
          <Item 
            name='user_password'
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            >
            <Input prefix={<LockOutlined />}
            type="password" placeholder="密码"/>
          </Item>
          <Item>
            <Button type="primary" htmlType="submit" className="login_form_button">
              登录
            </Button>
          </Item>
        </Form>
      </section>
    </div>
  )
}
