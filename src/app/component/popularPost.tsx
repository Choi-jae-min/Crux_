'use client'
import React, {useEffect} from 'react';
import MainBadge from "@/app/component/badges/mainBadge";
import {IoIosArrowRoundForward} from "react-icons/io";
import PostCard from "@/app/component/cards/postCard";
import {getPostList} from "@/mock/post_mock";

const PopularPost = () => {
    const [postList, setPostList] = React.useState([]);
    useEffect(() => {
        const post_mock_data = getPostList();
        setPostList(post_mock_data.slice(1, 6));
    }, []);

    console.log(postList)

    return (
        <article id={'Popular_posts'} className={'mx-14 pb-10'}>
            <MainBadge text={'Community'} className={'max-w-[120px]'}/>
            <div className={'flex items-end justify-between pt-4 pb-8'}>
                <h3 className={'text-3xl font-bold text-txt-01'}>인기 게시물 🔥</h3>
                <span className={'flex items-center text-txt-03'}>
                    <p>더보기</p>
                    <IoIosArrowRoundForward />
                </span>
            </div>
            <div className={'flex justify-start space-x-5'}>
                {postList.map((post , index) => {
                    return <PostCard key={index} postData={post} user_name={post.user.name}/>
                })}
            </div>
        </article>
    );
};

export default PopularPost;