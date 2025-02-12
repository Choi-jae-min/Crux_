'use client'
import React, {useEffect} from 'react';
import MainBadge from "@/app/component/badges/mainBadge";
import {IoIosArrowRoundForward} from "react-icons/io";
import PostCard from "@/app/component/cards/postCard";
import {getPostList} from "@/mock/post_mock";
import {AiOutlineHeart, AiOutlineMessage} from "react-icons/ai";
import Image from "next/image";

const PopularPost = () => {
    const [topPostList, setTopPostList] = React.useState([]);
    const [postList, setPostList] = React.useState([]);
    useEffect(() => {
        const post_mock_data = getPostList();
        setTopPostList(post_mock_data.slice(0, 5));
        setPostList(post_mock_data.slice(5 , post_mock_data.length));
    }, []);

    return (
        <section id={'Popular_posts'} className={'mx-14 pb-10'}>
            <MainBadge text={'Community'} className={'max-w-[120px]'}/>
            <div className={'flex items-end justify-between pt-4 pb-8'}>
                <h3 className={'text-3xl font-bold text-txt-01'}>인기 게시물 🔥</h3>
                <span className={'flex items-center text-txt-03'}>
                    <p>더보기</p>
                    <IoIosArrowRoundForward />
                </span>
            </div>
            <article className={'flex justify-start space-x-5 '}>
                {topPostList.map((post , index) => {
                    return <PostCard key={index} postData={post} user_name={post.user.name}/>
                })}
            </article>

            <article className={'text-txt-01 pt-10'}>
                {postList.map((post , index) => {
                    return <div className={'border-b py-2.5 flex justify-between'} key={index}>
                        <div>
                            <p className={'text-14'}>{post.title}</p>
                            <div className={'flex space-x-2'}>
                                <p className={'text-12 text-txt-03'}>{post.user.name} - {post.climbing_center}</p>
                                <span className={'flex items-center'}>
                                    <AiOutlineHeart />
                                    <p className={'text-12 text-txt-03 pl-1'}>{post.like_count}</p>
                                </span>
                                <span className={'flex items-center'}>
                                    <AiOutlineMessage />
                                    <p className={'text-12 text-txt-03 pl-1'}>{post.comments_len}</p>
                                </span>
                            </div>
                        </div>
                        {/*<div className={'relative w-[70px] h-[48px] border-1 rounded'}>*/}
                        {/*    <Image className={'absolute object-cover rounded'} src='/articles/image.png' alt="post image" fill/>*/}
                        {/*</div>*/}
                    </div>
                })}
            </article>
        </section>
    );
};

export default PopularPost;