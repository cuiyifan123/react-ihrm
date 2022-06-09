import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './store'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { history } from '@/utils/HistoryRouter'
// 导入全局的css样式
import '@/styles/index.scss'
// antd的组件样式
import 'antd/dist/antd.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <HistoryRouter history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </HistoryRouter>
)
