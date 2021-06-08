import { Component } from 'react'
import { Layout } from 'antd'
import { Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router'

import routerList from '../../router'

const { Content } = Layout


class AppMain extends Component {
    render() {
        return (
            <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
                >
                <Switch>
                    {routerList.map((route) => {
                    return (route.component ?
                        <Route exact path={route.path} key={route.path}
                        render={() => {
                            const Component = withRouter(connect(mapStateToProps)(route.component));
                            return <div className="layout_text" id="layout_text">
                                <Component/>
                            </div>;
                        }} /> : ''
                    );
                    })}
                    <Redirect to={routerList[1].path} />
                </Switch>
            </Content>
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo,
    }
}

export default AppMain