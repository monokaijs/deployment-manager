"use client";
import React from "react";
import {Button, Form, Input, Typography} from "antd";

export const LoginForm = () => {
  return <Form
    layout={'vertical'}
  >
    <div style={{
      marginBottom: 24
    }}>
      <Typography.Title level={3}>
        Login
      </Typography.Title>
      <Typography.Text>
        Server Manager requires you to authenticate to continue...
      </Typography.Text>
    </div>

    <Form.Item
      label={'Email'}
      style={{ marginBottom: 8 }}
    >
      <Input placeholder={'email@example.com'}/>
    </Form.Item>
    <Form.Item
      label={'Password'}
    >
      <Input.Password placeholder={'Password...'}/>
    </Form.Item>
    <Button type={'primary'}>
      Sign In
    </Button>
  </Form>
}
