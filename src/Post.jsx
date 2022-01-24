import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    return (
        <article className='p-2 shadow rounded hover:shadow-lg transition'>
            <Link to={`/post/${post.id}`}>
                <h2 className='text-lg font-bold'>{
                    (post.title).length <= 15
                        ? post.title
                        : `${(post.title).slice(0, 15)}...`}</h2>
                <p className='text-xs text-slate-400'>{post.datetime}</p>
            </Link>

            <p>{
                (post.body).length <= 25
                    ? post.body
                    : `${(post.body).slice(0, 25)}...`
            }</p>
        </article>)
};

export default Post;
