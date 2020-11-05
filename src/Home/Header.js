import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Rose from '../Images/roseoutline.png'
import './Header.css';

export default class Header extends Component {

    state = {
        menuOpen: false,
    };

    handleMenuClick = () => {
        this.setState({
            menuOpen: !this.state.menuOpen
        });
    };

    handleToggle = (event) => {
        event.preventDefault();
        this.setState({ menuOpen: !this.state.menuOpen })
    }

    renderLinks() {
        return (
            <>
                <li>
                    <Link onClick={this.handleMenuClick} to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link onClick={this.handleMenuClick} to={`/projects`}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link onClick={this.handleMenuClick} to='/contact'>
                        Contact
                    </Link>
                </li>
            </>
        )
    }

    render() {

        return (
            <>
                <header className="Header">
                    <div id="logo" className="Header-item">
                        <Link to=''>
                            <img src={Rose} alt="link redirects to home page" />
                        </Link>
                    </div>
                    <div id="username-and-menu" className="menu-group">
                        <div onClick={this.handleToggle} className='hamburger-menu'>
                            <span className={this.state.menuOpen ? 'rotateDown' : ''}></span>
                            <span className={this.state.menuOpen ? 'hide' : ''}></span>
                            <span className={this.state.menuOpen ? 'rotateUp' : ''}></span>
                        </div>

                        <div className='desktop-menu-group nav'>
                            {this.renderLinks()}
                        </div>    
                    </div>
                </header>

                <nav className={this.state.menuOpen ? 'nav' : 'hide'}>
                    <ul id="dropdown-menu">
                        {this.renderLinks()
                        }
                    </ul>
                </nav>
            </>
        )
    }
}

