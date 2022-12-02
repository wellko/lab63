import React, {useCallback, useEffect, useState} from 'react';
import AxiosApi from "../../axios-api";
import Poster from "../Poster/Poster";
import {Post} from "../../types";
import {Outlet, useLocation, useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const lock = useLocation();

    const [blogs, setBlogs] = useState<Post[]>([]);

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
    }, [lock, getPosts]);

    const readFunc = (id: string) => {
        navigate(id);
    }

    let inner;

    if (blogs.length > 0) {
        inner = (blogs.map(item => (
            <Poster
                key={Math.random()}
                post={item}
                onReadClick={() => readFunc(item.id!)}
            />)))
    } else {
        inner = (<h1>There is no blogs yet</h1>)
    }

    return (
        <div className='container'>
            <div className='d-flex flex-row'>
                <div className='w-50'>
                    {spinner ? (<div className="spinner-border text-primary" role="status">
                    </div>) : (<>{inner}</>)}
                </div>
                <Outlet/>
            </div>
        </div>
    );
};

export default HomePage;