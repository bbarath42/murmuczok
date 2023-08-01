import React, {Component} from 'react';
import {MenuItems} from './MenuItems';
import {Button} from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faXmark, faBars} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

class Navbar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Murmuczok <FontAwesomeIcon icon={faPaw} /></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    {this.state.clicked ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Bejelentkezés</Button>
            </nav>
        )
    }
}

export default Navbar