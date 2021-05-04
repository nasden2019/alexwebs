import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export const links = [
    {
        id: 1,
        url: '/',
        text: 'Home'
    },
    {
        id: 2,
        url: '/aboutme',
        text: 'About Me'
    },
    {
        id: 3,
        url: '/ProjectList',
        text: 'Projects'
    },
    {
        id: 4,
        url: '/skills',
        text: 'My Skills'
    },
]

export const social = [
    {
        id: 1,
        url: 'https://www.linkedin.com/in/alex-declercq-98068818a/',
        icon: <FaLinkedin />
    },
    {
        id: 2,
        url: 'https://www.facebook.com/alex.declercq.79/',
        icon: <FaFacebook />
    },
    {
        id: 3,
        url: 'https://www.instagram.com/alexeti01/',
        icon: <FaInstagram />
    },
    {
        id: 4,
        url: 'https://wa.me/+5493412550178',
        icon: <FaWhatsapp />
    },
]