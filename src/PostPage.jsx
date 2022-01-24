import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PostPage = ({ posts, handleDelete }) => {
    const { id } = useParams()
    const post = posts.find(post => (post.id).toString() === id)
    return (
        <main className='grow mb-2.5 grid grid-cols-2 px-2 grid grid-cols-1'>
            <article className='flex flex-col'>
                {post &&
                    <>
                        <h2>{post.title}</h2>
                        <p>{post.datetime}</p>
                        <p className='mb-2.5'>{post.body}</p>

                        <div className='self-end'>
                            <Link to={`/edit/${post.id}`}>
                                <button className='bg-green-700 text-white pointer px-4 py-2 rounded hover:bg-green-600 text-base transition mr-2 '>Edit Post</button>
                            </Link>
                            <button
                                className='bg-blue-700 text-white pointer px-4 py-2 rounded hover:bg-blue-600 text-base  transition'
                                onClick={() => handleDelete(post.id)}>Delete Post</button>
                        </div>
                    </>}

                {!post &&
                    <>
                        <p className='text-center'>Post Not Found</p>

                        <p className='text-center'>
                            <Link className='text-red-400  border hover:bg-red-400 hover:text-white inline-block w-40' to='/'>Go back Home</Link>
                        </p>
                    </>
                }
            </article>
        </main>)
};

export default PostPage;
