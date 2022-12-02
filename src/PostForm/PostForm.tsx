import React, {useCallback, useEffect} from 'react';
import {useState} from "react";
import {Post} from "../types";
import {useNavigate, useParams} from "react-router-dom";
import AxiosApi from "../axios-api";

const PostForm = () => {
    const {id} = useParams();

    const [post, setPost] = useState<Post>({
        message: '',
        date: ''
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

    const postMessage = async (e: React.FormEvent,) => {
        e.preventDefault();
        if (id) {
            try {
                await AxiosApi.put(url, post);
                setPost({
                    message: '',
                    date: ''
                })
            } finally {
                navigate('/')
            }
        } else {
            try {
                await AxiosApi.post('postsPage/posts.json', post);
                setPost({
                    message: '',
                    date: ''
                });
            } finally {
                navigate('/')
            }
        }
    }


    const messageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const date = new Date();
        setPost(prev => ({
            message: e.target.value,
            date: (date.getDate().toString() + '.' + date.getMonth().toString() + '.' + date.getFullYear().toString() + ' ' + date.getHours().toString() + ' :' + date.getMinutes().toString()),
        }))
    }


    return (
        <div className='container'>
            <form onSubmit={postMessage}>
                <textarea rows={9} cols={90} value={post.message} onChange={messageChange}/>
                <button type='submit'>Post</button>
            </form>
            <button onClick={() => console.log(post)}>123123</button>
        </div>
    );
};

export default PostForm;