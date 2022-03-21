import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
// import * as IoIcons from 'react-icons/io'


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icon: <AiIcons.AiOutlineLogin/>,
        cName: 'nav-text'
    },
    {
        title: 'Veterinarios',
        path: '/veterinarios',
        icon: <FaIcons.FaHandHoldingMedical/>,
        cName: 'nav-text'
    },
    {
        title: 'Pacientes',
        path: '/pacientes',
        icon: <FaIcons.FaDog/>,
        cName: 'nav-text'
    }
]
    

