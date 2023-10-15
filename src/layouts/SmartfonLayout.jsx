import React from 'react'
import { NavLink } from 'react-router-dom'

const SmartfonLayout = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to='honor' className='font-bold'>Honor</NavLink>
                </li>
            </ul>

        </div>
    )
}

export default SmartfonLayout