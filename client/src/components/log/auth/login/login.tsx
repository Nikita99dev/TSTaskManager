import { Form, Input, Button, Checkbox } from 'antd';
import { useState } from 'react';
import { RegisterSubmitType } from '../types/types';
import {RuleObject} from "rc-field-form/lib/interface";
import { useDispatch } from 'react-redux';
import { actions } from '../../../../app/rooReducer';
import { useNavigate } from 'react-router';
import { Container } from '../../../styles/Containet';




export default function LoginForm(){

  const navigate = useNavigate()

  const dispatch = useDispatch();

  const onFinish: RegisterSubmitType = (values:any) => {
    console.log('Success:', values);
    dispatch(actions.loginUserPending({values, navigate}))
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const [checked, setChecked] = useState(false);

  const onCheckboxChange = async (e: any) => {
      await setChecked(e.target.checked);
  };

  return (
    <Container>
     <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h1>LOGIN</h1>
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

      <Form.Item name="remember" wrapperCol={{ offset: 8, span: 16 }} >
        <Checkbox onChange={onCheckboxChange} checked={checked}>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          LOGIN
        </Button>
      </Form.Item>
    </Form>
    </Container>
  )
}
