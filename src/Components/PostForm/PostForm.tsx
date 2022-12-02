import React, {useCallback, useEffect} from 'react';
import {useState} from "react";
import {Post} from "../../types";
import {useNavigate, useParams} from "react-router-dom";
import AxiosApi from "../../axios-api";

const PostForm = () => {
	const {id} = useParams();

	const [spinner, setSpinner] = useState(false)

	const [post, setPost] = useState<Post>({
		message: '',
		date: '',
		title: '',
	});

	const url = '/postsPage/posts/' + id + '.json'

	const getPost = useCallback(async () => {
		try {
			const response = await AxiosApi.get<Post>(url);
			if (response.data !== null) {
				setPost(response.data);
			}
		} finally {
		}
	}, []);

	useEffect(() => {
		getPost().catch(console.error)
	}, [getPost])


	const navigate = useNavigate();

	const postMessage = async (e: React.FormEvent) => {
		e.preventDefault();
		if (post.title.length > 0 && post.message.length > 0) {
			setSpinner(true);
			if (id) {
				try {
					await AxiosApi.put(url, post);
					setPost({
						message: '',
						date: '',
						title: '',
					})
				} finally {
					navigate('/')
				}
			} else {
				try {
					await AxiosApi.post('postsPage/posts.json', post);
					setPost({
						message: '',
						date: '',
						title: '',
					});
				} finally {
					setSpinner(false);
					navigate('/')
				}
			}
		}
	}


	const messageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const date = new Date();
		setPost(prev => ({
			...prev,
			message: e.target.value,
			date: (date.getDate().toString() + '.' + date.getMonth().toString() + '.' + date.getFullYear().toString() + ' ' + date.getHours().toString() + ' :' + date.getMinutes().toString()),
		}))
	}

	const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPost(prev => ({
			...prev,
			title: e.target.value
		}))
	}


	return (
		<div className='container'>
			<form onSubmit={postMessage}>
				<div className='d-flex flex-column text-center border-primary border border-4 rounded mt-5'>
					<label htmlFor='title' className='fw-bold fs-6'>Title:</label>
					<input className='w-75 align-self-center' id='title' type='text' value={post.title}
						   onChange={titleChange}/>
					<label htmlFor='desc' className='fw-bold fs-6'>Message</label>
					<textarea className='w-75 align-self-center' id='desc' rows={9} cols={90} value={post.message}
							  onChange={messageChange}/>
					<button className='btn btn-primary mt-5' type='submit'>{spinner ? (
						<div className="spinner-border text-primary" role="status">
						</div>) : (id ? 'Change' : 'Post')}

					</button>
				</div>
			</form>
		</div>
	);
};

export default PostForm;