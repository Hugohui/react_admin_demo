import Login from '../views/Login'
import HookStateEffect from '../views/Hook_useState_useEffect'
import HookReducer from '../views/Hook_useReducer'

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
    component: HookStateEffect,
    mate: {
      title: 'Hook useStat/useEffect',
    },
    // children: [
    //   {
    //     path: 'home-1',
    //     name: 'home-1',
    //     component: Home,
    //     mate: {
    //       title: '首页-1',
    //     }
    //   }
    // ]
  },
  {
    path: '/home-2',
    name: 'home-2',
    component: HookReducer,
    mate: {
      title: 'Hook useReducer',
    }
  }
]