import { Form, Input, Button, Checkbox } from 'antd';
import { useState } from 'react';
import { userInteface } from '../../../app/types/userTypes';
// import React, { ReactElement } from 'react';
import { RegisterSubmitType } from './types/types';
import {RuleObject} from "rc-field-form/lib/interface";
import { useDispatch } from 'react-redux';
import { actions } from '../../../app/rooReducer';
import { useNavigate } from 'react-router';




export default function RegForm(){

  const navigate = useNavigate()

  const dispatch = useDispatch();

  const onFinish: RegisterSubmitType = (values) => {
    console.log('Success:', values);
    dispatch(actions.registerUserPending({values, navigate}))
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const [checked, setChecked] = useState(false);

  const onCheckboxChange = async (e: any) => {
      await setChecked(e.target.checked);
  };


  const validation = ( rule: RuleObject, value: any, callback: (error?: string) => void) => {
    if(checked) {
        return callback()
    }
    return callback("Please accept the terms and conditions")
};

  return (
     <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h1>Registration</h1>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input/>
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Atleast 6 characters!', min: 6}]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" wrapperCol={{ offset: 8, span: 16 }}  rules={[{required: true,  validator: validation}]}>
        <Checkbox onChange={onCheckboxChange} checked={checked}>Agree with terms and conditions</Checkbox>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
