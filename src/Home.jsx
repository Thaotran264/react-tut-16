import React from 'react';
import Feed from './Feed';

const Home = ({ posts }) => {
    return (
        <main className='grow mb-2.5 grid sm:grid-cols-2 gap-2 p-4'>
            {posts.length
                ? <Feed posts={posts} />
                : <p>No posts to display</p>
            }
        </main>);
};

export default Home;
