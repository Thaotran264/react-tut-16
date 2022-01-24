import React from 'react';

const Header = ({ title }) => {
    return (
        <header className='bg-blue-300 p-4'>
            <h1 className='text-3xl'>{title}</h1>
        </header>);
};

export default Header;
