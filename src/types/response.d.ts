interface ResponseResult<T> {
  success: boolean
  code: number
  message: string
  data: T
}

// 以下所有接口都是 为 ResponseResult的泛型 T(data) 配置的

// 用户登录的响应数据类型，data是一个字符串(token)
type UserLoginResponse = string
