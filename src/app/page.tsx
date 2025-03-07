import Image from "next/image";
import React from "react";
import Header from "@/app/component/ui/Header";
import SolutionButton from "@/app/component/buttons/solutionButton";
import SideMenu from "@/app/component/ui/sideMenu";
import {IoIosArrowRoundForward} from "react-icons/io";
import MainBadge from "@/app/component/badges/mainBadge";
import MainCarousel from "@/app/component/carousels/mainCarousel";
import PostCard from "@/app/component/cards/postCard";
import {getPostList} from "@/mock/post_mock";
import PopularPost from "@/app/component/popularPost";

export default function Home() {
  return (
    <main>
        <Header/>
        <article id={'main_banner'} className={'relative'}>
            <Image
                src="/crux_main01.png"
                width={3000}
                height={960}
                alt={''}
            />

            <div className={'absolute w-full bottom-[5%] text-center transform text-txt-01'}>
                <h1 className={'font-extrabold xl:text-50'}>CRUX, 해답을 찾다.</h1>
                <p className={'xl:text-24 font-light xl:pt-[20px] pb-5 xl:pb-[60px]'}>어려운 문제의 해답을 찾고 같이 Crux를 넘어갑시다.</p>
                <SolutionButton/>
            </div>
        </article>

        <article id={'main_container'} className="grid grid-cols-[2fr_4fr_4fr] mb-10 grid-rows-[1fr_4fr_4fr] text-txt-01 border-b border-opacity-30 border-txt-03 mt-[100px]">
            <div className="row-span-3 border-r border-opacity-30 border-txt-03 flex justify-center">
                <span className={'flex flex-col text-nowrap w-full items-center py-10'}>
                        <h2 className={'text-txt-point font-bold text-28'}>Climbing Guide</h2>
                        <SideMenu/>
                </span>
            </div>
            <div className="col-span-2 border-b border-opacity-30 border-txt-03 py-10 px-[120px] font-extrabold text-18 text-nowrap">
                <h3>클라이밍이란? / 소개, 종류</h3>
            </div>
            <div className="col-span-2 row-span-2 w-full py-14 px-[120px]">
                <span className={'flex space-x-[140px] items-center border-b pb-14 border-opacity-50 border-txt-03'}>
                    <h3 className={'font-bold text-40'}>클라이밍(Climbing) <br/> 이란?</h3>
                    <p className={'text-txt-02 text-nowrap'}>클라이밍은 제한된 상황에서 홀드를 이용하여 완등을 하는 스포츠입니다.<br/>
                        스포츠 클라이밍과 락(ROCK)클라이밍으로 나뉘며, <br/>
                        실내·실외 구분없이 누구나 쉽게 시작할 수 있습니다.</p>
                </span>
                <MainCarousel/>
             </div>
        </article>
        <PopularPost/>
    </main>
  );
}
