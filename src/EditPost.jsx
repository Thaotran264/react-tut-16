import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditPost = ({ posts, editTitle, editBody, setEditTitle, setEditBody, handleEdit }) => {
    const { id } = useParams()
    const post = posts.find(post => (post.id).toString() === id)

    useEffect(() => {
        if (post) {
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    }, [])

    return (
        <main className='grow p-2.5'>
            {editTitle &&
                <form onSubmit={e => e.preventDefault()} className=' flex flex-col'>
                    <label
                        className='absolute -left-24'
                        htmlFor='postTitle'>Title:</label>
                    <input
                        className='focus:outline-0 mb-2.5 text-3xl p-2 placeholder:text-black'
                        id='postTitle'
                        type='text'
                        placeholder='Post Title....'
                        required
                        value={editTitle}
                        onChange={e => setEditTitle(e.target.value)}
                    />
                    <label
                        className='absolute -left-24'
                        htmlFor='postBody'>Body:</label>
                    <textarea
                        className='mb-2.5 text-base resize-none h-48 p-2 placeholder:text-slate-700 focus:outline-0 text-slate-700'

                        id='postBody'
                        required
                        placeholder='Start writing here...'
                        value={editBody}
                        onChange={e => setEditBody(e.target.value)}
                    />

                    <button
                        className='text-lg text-white bg-blue-600 w-24 h-10 rounded self-center hover:bg-blue-500'
                        type='submit' onClick={() => handleEdit(post.id)}>Submit</button>
                </form>
            }
            {!editTitle && <>
                <p className='text-center'>Post Not Found</p>

                <p className='text-center'>
                    <Link className='text-red-400  border hover:bg-red-400 hover:text-white inline-block w-40' to='/'>Go back Home</Link>
                </p>
            </>}
        </main>);
};

export default EditPost;
