import Login from '../views/Login'
import Home from '../views/Home'

// eslint-disable-next-line
export default [
  {
    path: "/",
    name: "login",
    title: '登录',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    title: '首页',
    component: Home,
    children: [
      {
        path: 'home-1',
        name: 'home-1',
        title: '首页-1',
        component: Home,
      },
      {
        path: 'home-2',
        name: 'home-2',
        title: '首页-2',
        component: Home,
      }
    ]
  }
]