import { userLoginApi } from '@/apis/user'
import { AppThunk } from '@/store'
import { setToken } from '@/store/reducers/modules/user'
import { message } from 'antd'
import { history } from '@/utils/HistoryRouter'
// 登录的异步请求方法
export const userLogin =
  (data: any): AppThunk =>
  async (dispatch) => {
    // 发送登录请求
    const res = await userLoginApi(data)
    // 存储token
    dispatch(setToken(res.data.data))
    // 只有请求成功了这步才会执行，返回后台给的提示信息
    return res.data.message
  }
