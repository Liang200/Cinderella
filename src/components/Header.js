import React from 'react'
import HeaderLogo from '../assets/design_elements/logo 2.png'
import {MenuBar} from './MenuBar'
import {Icon} from 'antd'
import Popover from 'antd/es/popover'



export class Header extends React.Component {


    render() {
        const style = {
            padding: "0.5rem",

        }
        const content = (
            <div style={style}>
                <p style={style}>Balance: ${this.props.userInfo.balance}</p>
                <p style={style}>Bonus Points: {this.props.userInfo.bonusPoints}</p>
                <p style={style}>Email: {this.props.userInfo.email}</p>
                <p style={style}>Phone Number: {this.props.userInfo.phoneNumber}</p>
            </div>
        )
        return(
            <section className="header-container">
                <div className="logo-container">
                    <img src={HeaderLogo} alt=""/>
                </div>
                <div className="menu-container">
                    <MenuBar/>
                    <div className="logout-container">
                        <Popover placement={'bottomLeft'} title="Your Cinderella Account" content={content} trigger="hover" className="popover">
                            <p>Hello, {this.props.userInfo.name}</p>
                        </Popover>
                        <a className="logout" onClick={this.props.handleLogout}>
                            <Icon type="logout"/>{' '}Logout
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}