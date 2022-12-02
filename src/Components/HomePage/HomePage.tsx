import React, {useCallback, useEffect, useState} from 'react';
import AxiosApi from "../../axios-api";
import Poster from "../Poster/Poster";
import {Post} from "../../types";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
	const navigate = useNavigate();

	const [blogs, setBlogs] = useState<Post[]>([]);

	// const [refresh, setRefresh] = useState<boolean>(false);

	const [spinner, setSpinner] = useState(true);

	const getPosts = useCallback(async () => {
		try {
			const response = await AxiosApi.get('/postsPage/posts.json');
			let posts = [];
			if (response.data !== null) {
				posts = Object.keys(response.data).map(key => {
					const post = response.data[key];
					post.id = key;
					return post
				});
			}
			setBlogs(posts);
		} finally {
			setSpinner(false);
		}
	}, []);

	useEffect(() => {
		getPosts().catch(console.error);
	}, [getPosts]);


	// const deleteFunc = async (id: string) => {
	//     const url = 'postsPage/posts/' + id + '.json'
	//     try {
	//         await axiosApi.delete(url);
	//     } finally {
	//         setRefresh(prevState => !prevState);
	//     }
	// }
	//
	const readFunc = (id: string) => {
		navigate(id);
	}
	//
	// const editFunc = (id:string) => {
	//
	// }

	let inner;

	if (blogs.length > 0) {
		inner = (blogs.map(item => (
			<Poster
				key={Math.random()}
				post={item}
				// onRemoveClick={() => deleteFunc(item.id!)}
				// onEditClick={() => editFunc(item.id!)}
				onReadClick={() => readFunc(item.id!)}
			/>)))
	} else {
		inner = (<h1>There is no blogs yet</h1>)
	}

	return (
		<div className='container'>
			{spinner ? (<div className="spinner-border text-primary" role="status">
			</div>) : (<>{inner}</>)}
		</div>
	);
};

export default HomePage;