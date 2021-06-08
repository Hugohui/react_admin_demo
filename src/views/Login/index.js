import { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'


class Login extends Component {
    render() {
        return 'Login'
    }
}

export default withRouter(connect()(Login))