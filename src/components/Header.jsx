import React from 'react'
import {Link} from 'react-router-dom'
// import { Navigate } from 'react-router-dom'

export default function Header() {
    return (
        <div className='header'>
            <Link to='/' className='menu'>MEMO</Link>
            <Link to='/like' className='menu'>LIKE</Link>
        </div>
    )
}
