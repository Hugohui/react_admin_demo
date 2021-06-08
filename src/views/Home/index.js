import { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'


class Home extends Component {
    render() {
        return 'Home'
    }
}

export default withRouter(connect()(Home))