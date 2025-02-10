'use client'
import React from 'react';
import {getPostList, getPostWithDetails} from "@/mock/post_mock";

const PostCarousel = () => {
    const post_list = getPostList();
    console.log(post_list)
    return (
        <div>
            123
        </div>
    );
};

export default PostCarousel;