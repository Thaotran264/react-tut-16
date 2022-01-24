import React from 'react';

const NewPost = ({ postTitle, setPostTitle, postBody, setPostBody, handleSubmit }) => {
    return (
        <main className='grow p-2.5'>
            <form onSubmit={handleSubmit} className=' flex flex-col'>
                <label
                    className='absolute -left-24'
                    htmlFor='postTitle'>Title:</label>
                <input
                    className='focus:outline-0 mb-2.5 text-3xl p-2 placeholder:text-black'
                    id='postTitle'
                    type='text'
                    placeholder='Post Title....'
                    required
                    value={postTitle}
                    onChange={e => setPostTitle(e.target.value)}
                />
                <label
                    className='absolute -left-24'
                    htmlFor='postBody'>Body:</label>
                <textarea
                    className='mb-2.5 text-base resize-none h-48 p-2 placeholder:text-slate-700 focus:outline-0 text-slate-700'

                    id='postBody'
                    required
                    placeholder='Start writing here...'
                    value={postBody}
                    onChange={e => setPostBody(e.target.value)}
                />

                <button
                    className='text-lg text-white bg-blue-600 w-24 h-10 rounded self-center hover:bg-blue-500'
                    type='submit'>Submit</button>
            </form>
        </main>);
};

export default NewPost;
