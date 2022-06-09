import { Form, Input, Button, message } from 'antd'
import { UserOutlined, UnlockOutlined } from '@ant-design/icons'
import { useAppDispatch } from '@/app/hooks'
import { userLogin } from '@/store/actions/user'
import styles from './index.module.scss'
import { history } from '@/utils/HistoryRouter'
const rules = {
  mobile: [
    { required: true, message: '账号为必填项', validateTrigger: 'onBlur' },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: '手机号的格式不正确',
      validateTrigger: 'onBlur'
    }
  ],
  password: [
    { required: true, message: '密码为必填项', validateTrigger: 'onBlur' },
    {
      min: 6,
      max: 16,
      message: '手机号的格式不正确',
      validateTrigger: 'onBlur'
    }
  ]
}

const Login = () => {
  const dispatch = useAppDispatch()
  const onFinish = async (value: UserLoginRequest) => {
    try {
      const msg = await dispatch(userLogin(value))
      // 成功提示用户,并跳转到登录页
      message.success(msg, 1, () => {
        history.push('/')
      })
    } catch (e: any) {
      message.error(e.message)
    }
  }

  return (
    <div className={styles.root}>
      <div className="head">iHRM后台登录系统</div>
      <Form
        initialValues={{ mobile: '13800000002', password: '123456' }}
        onFinish={onFinish}
        validateTrigger={['onBlur']}
      >
        <Form.Item name="mobile" rules={rules.mobile}>
          <Input
            size="large"
            prefix={<UserOutlined />}
            style={{ borderRadius: 10 }}
          />
        </Form.Item>
        <Form.Item name="password" rules={rules.password}>
          <Input
            size="large"
            prefix={<UnlockOutlined />}
            style={{ borderRadius: 10 }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
        <div className="tips">还没有账号？立即注册</div>
      </Form>
    </div>
  )
}
export default Login
