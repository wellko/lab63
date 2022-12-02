import React from 'react';
import {Post} from "../../types";
import {useParams} from "react-router-dom";

interface Props {
	post: Post;
	onRemoveClick?: React.MouseEventHandler;
	onEditClick?: React.MouseEventHandler;
	onReadClick: React.MouseEventHandler;
}


const Poster: React.FC<Props> = ({post, onRemoveClick, onEditClick, onReadClick}) => {

	const {id} = useParams();

	return (
		<div className='container'>
			{id ? (<div className='border-primary border border-4 rounded mb-5'>
					<h1> {post.title}</h1>
					<p> Posted: {post.date}</p>
					<p className='border-top border-4 border-bottom'> {post.message}</p>
					<button className='btn btn-warning me-5' onClick={onEditClick}>Edit</button>
					<button className='btn btn-danger' onClick={onRemoveClick}>Delete</button>
				</div>) :
				(<div className='border-primary border border-4 rounded mb-5'>
					<h1> {post.title}</h1>
					<p className='border-top border-4 border-bottom'> Posted: {post.date}</p>
					<button className='btn btn-outline-dark' onClick={onReadClick}>Read More</button>
				</div>)
			}

		</div>
	);
};

export default Poster;