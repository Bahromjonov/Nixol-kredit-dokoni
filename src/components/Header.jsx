import React from 'react'
import { Link, } from 'react-router-dom'

// Imgs
import img from '../assets/images/Nixol.png'
import Navbar from './Navbar'


const Header = () => {


    return (
        <header className='py-5  bg-white '>
            <div className='main-container flex justify-between items-center'>
                <div className='flex items-center space-x-6'>
                    <Link >
                        <img width={100} height={50}  src={img} alt="Nixol image" />
                    </Link>
                </div>
                <ul className='flex space-x-5 mr-2' >
                    {/* Hard icon */}
                    <li>
                        <Link to='heart' className='relative'>
                            <div className='w-4 h-4 bg-green-500 rounded-full absolute -right-2 -top-1 flex justify-center items-center'>
                                <span className='text-10'>0</span>
                            </div>
                            <svg className='hover:text-green-400 duration-100' fill="currentColor" height="22px" width="22px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 471.701 471.701" xml:space="preserve">
                                <g>
                                    <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
                                    c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
                                    l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
                                    C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
                                    s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
                                    c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
                                    C444.801,187.101,434.001,213.101,414.401,232.701z"/>
                                </g>
                            </svg>
                        </Link>
                    </li>
                    {/* Basket icon  */}
                    <li>
                        <Link to='basket' className='relative'>
                            <div className='w-4 h-4 bg-green-500 rounded-full absolute -right-2 -top-1 flex justify-center items-center'>
                                <span className='text-10'>0</span>
                            </div>
                            <svg className='hover:text-green-400 duration-100' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.0591 4.05197H7.06851C6.73335 4.05197 6.5357 4.2883 6.62163 4.63635L8.64117 11.5844C8.68413 11.7649 8.8646 11.8981 9.08804 11.8981H19.0869C19.3103 11.8981 19.4908 11.7649 19.5337 11.5844L21.506 4.63635C21.5834 4.40861 21.463 4.05197 21.0591 4.05197ZM18.7732 10.9571H9.44468L9.04077 9.56917H19.1771L18.7732 10.9571ZM19.4005 8.66683H8.75718L8.35757 7.27893H19.8044L19.4005 8.66683ZM20.0709 6.33791H8.09976L7.69585 4.95002H20.4791L20.0709 6.33791Z" fill="currentColor" stroke="#222222" stroke-width="0.2" />
                                <path d="M4.60195 1.04414C4.55898 0.820703 4.37852 0.6875 4.15508 0.6875H0.472656V1.58555H3.78984L6.84062 13.8703C6.88359 14.0938 7.06406 14.227 7.2875 14.227H19.1254V13.2859H7.64844L4.60195 1.04414Z" fill="currentColor" stroke="#222222" stroke-width="0.2" />
                                <path d="M17.742 15.6191H7.29199V16.5172H17.742V15.6191Z" fill="currentColor" stroke="#222222" stroke-width="0.2" />
                                <path d="M17.2 17.7246C16.2117 17.7246 15.4082 18.5324 15.4082 19.5164C15.4082 20.5047 16.216 21.3082 17.2 21.3082C18.184 21.3082 18.9918 20.5004 18.9918 19.5164C18.9961 18.5324 18.1883 17.7246 17.2 17.7246ZM17.2 20.3715C16.7531 20.3715 16.3492 19.9676 16.3492 19.5207C16.3492 19.0738 16.7059 18.6699 17.2 18.6699C17.6941 18.6699 18.0508 19.0738 18.0508 19.5207C18.0551 19.9676 17.6512 20.3715 17.2 20.3715Z" fill="currentColor" stroke="#222222" stroke-width="0.2" />
                                <path d="M8.50371 17.7246C7.51543 17.7246 6.71191 18.5324 6.71191 19.5164C6.71191 20.5047 7.51973 21.3082 8.50371 21.3082C9.4877 21.3082 10.2955 20.5004 10.2955 19.5164C10.2955 18.5324 9.4877 17.7246 8.50371 17.7246ZM8.50371 20.3715C8.05684 20.3715 7.65293 19.9676 7.65293 19.5207C7.65293 19.0738 8.00957 18.6699 8.50371 18.6699C8.95059 18.6699 9.35449 19.0738 9.35449 19.5207C9.35449 19.9676 8.95059 20.3715 8.50371 20.3715Z" fill="currentColor" stroke="#222222" stroke-width="0.2" />
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <Navbar />
            </div>
        </header>
    )
}

export default Header