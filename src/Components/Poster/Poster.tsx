import React from 'react';
import {Post} from "../../types";

interface Props {
    post: Post;
    onReadClick: React.MouseEventHandler;
}


const Poster: React.FC<Props> = ({post, onReadClick}) => {


    return (
        <div className='container'>
            <div className='border-primary border border-4 rounded mb-5'>
                <h1 className='text-wrap text-break fst-italic'> {post.title}</h1>
                <p className='border-top border-4 border-bottom'> Posted: {post.date}</p>
                <button className='btn btn-outline-dark' onClick={onReadClick}>Read More</button>
            </div>
        </div>
    );
};

export default Poster;