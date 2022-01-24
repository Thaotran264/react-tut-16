import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ setSearch, search }) => {
    const [click, setClick] = useState(false)
    return (
        <nav className='bg-slate-500 flex items-center justify-between mb-2.5 min-w-fit px-2.5'>
            <div>
                <h2 className='text-white text-base py-2.5'>Logo</h2>
            </div>
            <form onSubmit={e => e.preventDefault()} className='hidden sm:flex sm:flex-1 sm:justify-end'>
                <label htmlFor='search' className='absolute -left-24'>Search Posts</label>
                <input
                    className='px-2 py-1 rounded focus:outline-0 focus:underline w-full'
                    id='search'
                    type='text'
                    placeholder='Search Posts'
                    value={search}
                    onChange={e => setSearch(e.target.value)} />
            </form>
            <ul className='hidden sm:flex sm:flex-1 sm:justify-end'>
                <li className=''>
                    <Link to='/' className='block hover:bg-slate-300 transition-all text-base p-4 text-white hover:text-black'>Home</Link>
                </li>
                <li className=''>
                    <Link to='/about' className='block hover:bg-slate-300 transition-all text-base p-4 text-white hover:text-black'>About</Link>
                </li>
                <li className=''>
                    <Link to='/post' className='block hover:bg-slate-300 transition-all text-base p-4 text-white hover:text-black'>Post</Link>
                </li>

            </ul>
            {!click &&
                <div className='w-4 h-4 sm:hidden cursor-pointer absolute right-4'
                    onClick={() => setClick(!click)}>
                    <img src='https://cdn-icons-png.flaticon.com/512/1828/1828859.png' alt='' className='text-white' />
                </div>
            }
            {click &&
                <ul className='sm:hidden absolute right-0 top-0 bg-gray-400 h-full w-48 transition'>
                    <li
                        className='block hover:bg-slate-300 transition-all text-base p-4 text-white hover:text-black cursor-pointer'
                        onClick={() => {
                            setClick(!click)
                        }}>Close</li>
                    <li className=''>
                        <Link to='/' className='block hover:bg-slate-300 transition-all text-base p-4 text-white hover:text-black'>Home</Link>
                    </li>
                    <li className=''>
                        <Link to='/about' className='block hover:bg-slate-300 transition-all text-base p-4 text-white hover:text-black'>About</Link>
                    </li>
                    <li className=''>
                        <Link to='/post' className='block hover:bg-slate-300 transition-all text-base p-4 text-white hover:text-black'>Post</Link>
                    </li>

                </ul>
            }
        </nav>)
};

export default Nav;
