import React, { useState, useEffect, useRef } from 'react'
import logoverde from '../../Assets/logoverde.png'
import './NavBar.css'
import { Link } from 'react-router-dom'

export const NavBar = () => {


    const [selected, setSelected] = useState('home')

    const [scrolled, setScrolled] = useState(true);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY >= 200) {
                setScrolled(false);
            } else {
                setScrolled(true);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

        return (
            <div className={`${!scrolled && 'scrolled'} navbar_custom shadowbottom`}>
                <nav className="navbar bg-transparent navbar-expand-lg navbar-light bg-light py-3" >
                    <img className='logo mx-0 px-0' width='250px' src={logoverde}></img>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse px-3 mx-3 d-flex justify-content-end navbar-items" id="navbarNav">
                        <ul className="navbar-nav text-xl">
                            <li className="nav-item" onClick={() => setSelected('home')}>
                                <Link to='/' className="nav-link"><h5 className={selected === 'home' ? 'neon' : 'navitem'}>Home</h5></Link>
                            </li>
                            <li className="nav-item" onClick={() => setSelected('contact')}>
                                <Link to='/contact' className="nav-link"><h5 className={selected === 'contact' ? 'neon' : 'navitem'}>Contacto</h5></Link>
                            </li>
                            <Link to='/priceme' className="nav-link">
                                <li className="nav-item" onClick={() => setSelected('price')}>
                                    <h5 className={selected === 'price' ? 'neon' : 'navitem'}>Presupuesto</h5>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
