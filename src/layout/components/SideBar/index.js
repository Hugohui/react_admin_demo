import { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'

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
                        {this.getMenuNodes(routerList)}
                    </Menu>
                </Sider>
            </Fragment>
        )
    }
    getMenuNodes = (data) => {
        return data.map(item => {
            if (item.mate.hidden) {
                return ''
            } else if (!item.children) {
                return (
                    <Menu.Item key={item.path}>
                        <Link to={item.path}>
                            {/* <Icon type={item.icon}></Icon> */}
                            <span>{item.mate.title}</span>
                        </Link>
                    </Menu.Item>
                )
            } else {
                return (
                    <SubMenu
                        key={item.path}
                        title={
                            <span>
                                {/* <Icon type={item.icon}></Icon> */}
                                <span>{item.mate.title}</span>
                            </span>
                        }
                    >
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                )
            }
        })
    }
}

export default SideBar