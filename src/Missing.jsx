import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
    return (
        <main className='flex grow flex-col items-center justify-center'>
            <h2 className='mb-2.5 text-4xl'>Page Not Found</h2>
            <p>
                <Link to='/' className='text-red-400 border border-red-400 px-4 py-2.5 inline-block rounded hover:bg-red-400 hover:text-white transition'>Go back home </Link>
            </p>
        </main>);
};

export default Missing;
