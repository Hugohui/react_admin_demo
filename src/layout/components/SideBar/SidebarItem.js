import { Component, Fragment } from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'


const { SubMenu } = Menu

class SidebarItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { route } = this.props
        return (
            <Fragment>
                {!route.children ? 
                    <Menu.Item key={route.path}>
                        <Link to={route.path}>{route.title}</Link>
                    </Menu.Item> : 
                    <SubMenu key={route.path} title={route.title}>
                        {route.children.map(subRoute => {
                            return <SidebarItem route={subRoute} key={subRoute.path}/>
                        })}
                    </SubMenu>
                }
            </Fragment>
        )
    }
}

export default SidebarItem