import request from '@/utils/request'
/**
 *
 * @param data  包含{ mobile : string , password : string}的对象
 * @returns 请求的结果( promise对象 )
 */
export function userLoginApi(data: UserLoginRequest) {
  return request<UserLoginResponse>({
    url: '/sys/login',
    method: 'post',
    data
  })
}
