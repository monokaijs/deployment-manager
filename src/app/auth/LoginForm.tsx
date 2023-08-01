"use client";
import React, {useEffect, useState, useTransition} from "react";
import {Button, Form, FormProps, Input, message, Typography} from "antd";
import {processLogin} from "@/actions/auth";
import {useRouter} from "next/navigation";

export const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter()

  const onFinish = (values: any) => {
    fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify(values)
    }).then(r => r.json()).then((response) => {
      message.success(response.message).then(() => {
        router.replace('/');
      });
    });
  }

  return <Form
    layout={'vertical'}
    onFinish={onFinish}
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
      name={'email'}
    >
      <Input placeholder={'email@example.com'}/>
    </Form.Item>
    <Form.Item
      label={'Password'}
      name={'password'}
    >
      <Input.Password placeholder={'Password...'}/>
    </Form.Item>
    <Button type={'primary'} htmlType={'submit'}>
      Sign In
    </Button>
  </Form>
}
