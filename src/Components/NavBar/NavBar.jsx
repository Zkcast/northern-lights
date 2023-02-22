import React, { useState, useEffect, useRef } from 'react'
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
        <React.Fragment>
            <div className={`${!scrolled && 'scrolled'} navbar_custom shadowbottom`}>
                <nav className={"navbar bg-transparent navbar-expand-lg navbar-light bg-light"}>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse px-3 mx-3 d-flex justify-content-end navbar-items" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="" onClick={() => setSelected('home')}>
                                <Link to='/' className="nav-link"><span className={selected === 'home' ? 'neon' : 'navitem'}>Home</span></Link>
                            </li>
                            <li className="" onClick={() => setSelected('contact')}>
                                <Link to='/contact' className="nav-link"><span className={selected === 'contact' ? 'neon' : 'navitem'}>Contacto</span></Link>
                            </li>
                            <Link to='/priceme' className="nav-link">
                                <li className="" onClick={() => setSelected('price')}>
                                    <span className={selected === 'price' ? 'neon' : 'navitem'}>Presupuesto</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    )
}
