import { Component, Fragment } from 'react'
import { Layout, Menu } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import SidebarItem from './SidebarItem'
import routerList from '../../../router'


const { Sider } = Layout
const { SubMenu } = Menu

class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            routerList: routerList
        }
    }
    render() {
        return (
            <Fragment>
                <Sider width={200} className="site-layout-background">
                    <Menu
                    mode="inline"
                    style={{ height: '100%', borderRight: 0 }}
                    >
                        {routerList.map(route => {
                            return <SidebarItem route={route} key={route.path}></SidebarItem>
                        })}
                    </Menu>
                </Sider>
            </Fragment>
        )
    }
}

export default SideBar