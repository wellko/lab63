import React from 'react';
import {Post} from "../../types";

interface Props {
    post: Post;
    onRemoveClick: React.MouseEventHandler;
    onEditClick: React.MouseEventHandler;
}

const PosterEditor : React.FC<Props>= ({post, onRemoveClick,onEditClick}) => {
    return (
        <div className='border-primary border border-4 rounded mb-5'>
            <h1 className='text-wrap text-break fst-italic'> {post.title}</h1>
            <p> Posted: {post.date}</p>
            <p className='border-4 border-bottom fw-bold'> Message : </p>
            <p className='border-4 border-bottom'> {post.message}</p>
            <button className='btn btn-warning me-5' onClick={onEditClick}>Edit</button>
            <button className='btn btn-danger' onClick={onRemoveClick}>Delete</button>
        </div>
    );
};

export default PosterEditor;