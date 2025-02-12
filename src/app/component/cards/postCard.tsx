'use client'
import React, {FC} from 'react';
import {IPost} from "@/mock/post_mock";
import Image from "next/image";

interface Props {
    postData : IPost
    user_name : string
}
const PostCard:FC<Props> = ({postData ,user_name}) => {
    return (
        <div className={'text-txt-01'}>
            <div className={'relative w-[370px] h-[148px] border-1 rounded-xl'}>
                <Image className={'absolute object-cover object-[50% 100%] rounded-xl'} src='/articles/image.png' alt="post image" fill/>
            </div>
            <h3 className={'pt-2 overflow-ellipsis font-semibold'}>{postData.title}</h3>
            <p className={'text-14 text-txt-03 overflow-ellipsis pt-1'}>{user_name} - {postData.climbing_center}</p>
        </div>
    );
};

export default PostCard;