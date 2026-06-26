import React from 'react'
import './Whatsapp.css'
import whatsappicon from '../../Assets/whatsappicon.png'
import { Link } from 'react-router-dom'

export const Whatsapp = () => {
    return (
        <div className='whatsapp'>
            <div title='Comunicate con nosotros!' className='d-flex justify-content-end m-3'>
                <Link target='_blank' to='https://wa.me/+541159112025'><img src={whatsappicon} width='50px' className='text-end'></img></Link>
            </div>
        </div>
    )
}
