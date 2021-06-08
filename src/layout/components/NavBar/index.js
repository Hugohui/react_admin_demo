import React, { Component, Fragment } from 'react'
import { Layout, Menu } from 'antd'

import './index.scss'


const { Header } = Layout

class NavBar extends Component {
    render() {
        const { userInfo } = this.props
        return (
            <Fragment>
                <Header className="header">
                    <div className="logo" />
                    <Menu className="header-menu" theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                    <div className="user-info">欢迎{userInfo.name}</div>
                </Header>
            </Fragment>
        )
    }
}

export default NavBar



