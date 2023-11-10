import React from 'react'
import { Outlet } from 'react-router-dom'
import IdishTovoqlar from '../pages/IdishTovoqlar'

const IdishTovoqlarLayout = () => {
    return (
        <div className='main-container flex gap-10 justify-between py-10'>
            <IdishTovoqlar />
                <Outlet />
            </div>
      )
}

export default IdishTovoqlarLayout