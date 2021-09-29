import React from 'react'
import {
  Form,
  Input,
  Button,
  } from 'antd'
import { UserOutlined, LockOutlined} from '@ant-design/icons';
import logo from '../../assets/images/logo.png'
// import style from './login.less';
import './login.less'

export default function Login() {
  const Item = Form.Item
  const login = ()=>{
    console.log('提交表单');
  };
  return (
    <div className="login">
      <header className="login_header">
        <img src={logo} alt="logo"/>
        <h1>React 项目: 后台管理系统</h1>
      </header>
      <section className="login_content">
        <h3>用户登陆</h3>
        <Form onSubmit={login} className="login_form">
          <Item>
            <Input prefix={<UserOutlined />}
            placeholder="用户名"/>
          </Item>
          <Item>
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
    // <div className="login">
    //   <header className={style.login_header}>
    //     <img src={logo} alt="logo"/>
    //     <h1>React 项目: 后台管理系统</h1>
    //   </header>
    //   <section className={style.login_content}>
    //     <h3>用户登陆</h3>
    //     <Form onSubmit={login} className={style.login_form}>
    //       <Item>
    //         <Input prefix={<UserOutlined />}
    //         placeholder="用户名"/>
    //       </Item>
    //       <Item>
    //         <Input prefix={<LockOutlined />}
    //         type="password" placeholder="密码"/>
    //       </Item>
    //       <Item>
    //         <Button type="primary" htmlType="submit" className={style.login_form_button}>
    //         登录
    //         </Button>
    //       </Item>
    //     </Form>
    //   </section>
    // </div>
  )
}
