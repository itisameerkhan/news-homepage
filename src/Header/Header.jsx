import './Header.css';
import Logo from '../../assets/images/logo.svg';
import { useState } from 'react';

const Header = ({show, setShow}) => {

    return (
        <div className="header">
            <img src={Logo} className='header-logo' />
            <div className="nav">
                <ul className='nav-ul'>
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </ul>
                <div className="burger-menu-items">
                    <div 
                        className={`burger-menu`}
                        onClick={() => setShow(!show)}>
                        <div className={`menu-line ${show ? 'line-one-open' : 'line-one-close'}`}></div>
                        <div className={`menu-line ${show ? 'line-two-open' : 'line-two-close'}`}></div>
                        <div className={`menu-line ${show ? 'line-three-open' : 'line-three-close'}`}></div>
                    </div>
                    <div   
                        className='burger-menu-list'
                        style={{right: show ? '100px' : '-360px'}}
                    >
                        <ul className='burger-nav-ul'>
                            <li>Home</li>
                            <li>New</li>
                            <li>Popular</li>
                            <li>Trending</li>
                            <li>Categories</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;