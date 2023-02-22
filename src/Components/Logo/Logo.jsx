import React from 'react'
import './Logo.css'
import logoverde from '../../Assets/logoverde.png'


export const Logo = () => {
    return (
        <div>
            <img className='logo' width='330px' src={logoverde}></img>
        </div>
    )
}
