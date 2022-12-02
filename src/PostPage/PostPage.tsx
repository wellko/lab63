import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import AxiosApi from "../axios-api";
import {Post} from "../types";
import Poster from "../Post/Post";
import axiosApi from "../axios-api";

const PostPage = () => {
    const {id} = useParams();

    const navigate = useNavigate();

    const [post, setPost] = useState<Post>({
        message: '',
        date: ''
    });

    const url = '/postsPage/posts/' + id + '.json';

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

    const deleteFunc = async (id: string) => {
        const url = 'postsPage/posts/' + id + '.json'
        try {
            await axiosApi.delete(url);
        } finally {
            navigate('/')
        }
    }

    const readFunc = (id: string) => {
        navigate(id);
    }

    const editFunc = (id:string) => {

    }

    return (
        <div>
            <Poster
                post={post}
                onRemoveClick={() => deleteFunc(id!)}
                onEditClick={() => editFunc(id!)}
                onReadClick={() => readFunc(id!)}
            />
        </div>
    );
};

export default PostPage;