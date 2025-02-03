'use client'
import React from 'react';
import ClimbingCard from "@/app/component/ui/ClimbingCard";
import {climbingDescription} from "@/assets/climbingInfo";

const MainCarousel = () => {
    const [current, setCurrent] = React.useState(0);

    return (
        <div>
            <div className={'flex justify-between items-center pt-10'}>
                <span className={'flex font-bold text-24'}>
                    <p onClick={() => {setCurrent(0)}} className={`cursor-pointer select-none border-r pr-5 ${current !== 0 ? 'text-txt-03' :''} transition-colors`}>스포츠 클라이밍</p>
                    <p onClick={() => {setCurrent(1)}} className={`cursor-pointer select-none pl-5 ${current !== 1 ? 'text-txt-03' :''} transition-colors`}>락(Rock) 클라이밍</p>
                </span>
                <p className={'text-txt-03 text-14'}>*2024 파리 올림픽 기준</p>
            </div>
            <article className={'flex justify-between space-x-[110px] pt-10 text-txt-02'}>
                {climbingDescription.map((value, index, array) => {
                    return <ClimbingCard key={index} title={value.title} description={value.description}/>

                })}
            </article>
        </div>
    );
};

export default MainCarousel;
