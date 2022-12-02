import React from 'react';
import {Post} from "../types";
import {useParams} from "react-router-dom";

interface Props {
    post: Post;
    onRemoveClick: React.MouseEventHandler;
    onEditClick:React.MouseEventHandler;
    onReadClick: React.MouseEventHandler;
}


const Poster: React.FC<Props> = ({post, onRemoveClick, onEditClick, onReadClick}) => {

    const  {id} = useParams();

    return (
        <div>
            <h1> {post.date}</h1>
            <p> {post.message}</p>

            {id? (<><button onClick={onEditClick}>Edit</button>
                <button onClick={onRemoveClick}>Delete</button></>):
                (<button onClick={onReadClick}>Read More</button> )
            }

        </div>
    );
};

export default Poster;