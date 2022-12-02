import React, {useCallback, useEffect, useState} from 'react';
import {Outlet, useNavigate, useParams} from "react-router-dom";
import AxiosApi from "../../axios-api";
import {Post} from "../../types";
import axiosApi from "../../axios-api";
import PosterEditor from "../PosterEditor/PosterEditor";

const PostPage = () => {
	const {id} = useParams();

	const [spinner, setSpinner] = useState(true);

	const navigate = useNavigate();

	const [post, setPost] = useState<Post>({
		message: '',
		date: '',
		title: ''
	});

	const url = '/postsPage/posts/' + id + '.json';

	const getPost = useCallback(async () => {
		try {
			const response = await AxiosApi.get<Post>(url);
			if (response.data !== null) {
				setPost(response.data);
			}
		} finally {
			setSpinner(false);
		}
	}, [url]);

	useEffect(() => {
		getPost().catch(console.error)
	}, [getPost, id])

	const deleteFunc = async (id: string) => {
		const url = 'postsPage/posts/' + id + '.json'
		try {
			await axiosApi.delete(url);
		} finally {
			navigate('/')
		}
	}

	const editFunc = () => {
		navigate('edit')
	}

	return (
		<div className='container w-50'>
			{spinner ? (<div className="spinner-border text-primary" role="status">
			</div>) : (<PosterEditor
				post={post}
				onRemoveClick={() => deleteFunc(id!)}
				onEditClick={() => editFunc()}
			/>)}
			<Outlet/>
		</div>
	);
};

export default PostPage;