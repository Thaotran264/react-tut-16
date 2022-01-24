import React from 'react';

const Footer = () => {
    const today = new Date()
    return (
        <footer className='bg-blue-300 text-center p-4'>
            <p className='text-lg'>Copyright &copy; {today.getFullYear()}</p>
        </footer>)
};

export default Footer;
