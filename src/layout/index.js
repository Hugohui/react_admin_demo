import React, { Component, Fragment } from 'react'
import { Layout } from 'antd';
import './index.scss'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import BreadCrumb from './components/BreadCrumb'
import AppMain from './components/AppMain'
import Login from '../views/Login'
import { getUserInfo } from '../api/user'


class LayoutItem extends Component {
    componentDidMount() {
        this.getUserInfo()
    }

    async getUserInfo() {
        await getUserInfo().then(res => {
            // this.props.history.push('/');
        })
    }

    render() {
        const { userInfo } = this.props
        if (this.props.location.pathname === '/') {
            return <Login />
        }
        return (
            <Fragment>
                <Layout>
                    <NavBar userInfo={userInfo}/>
                    <Layout>
                        <SideBar />
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <BreadCrumb />
                            <AppMain />
                        </Layout>
                    </Layout>
                </Layout>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.UserInfo
    }
}

export default withRouter(connect(mapStateToProps)(LayoutItem))