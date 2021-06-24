import Login from '../views/Login'
import Home from '../views/Home'

// eslint-disable-next-line
export default [
  {
    path: "/",
    name: "login",
    title: '登录',
    component: Login,
    mate: {
      hidden: true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    mate: {
      title: '首页',
    },
    children: [
      {
        path: 'home-1',
        name: 'home-1',
        component: Home,
        mate: {
          title: '首页-1',
        }
      },
      {
        path: 'home-2',
        name: 'home-2',
        component: Home,
        mate: {
          title: '首页-2',
        }
      }
    ]
  }
]