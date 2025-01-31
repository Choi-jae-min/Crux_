'use client'
import React from 'react';
import Image from 'next/image'
import SolutionButton from "@/app/component/buttons/solutionButton";
const MainForm = () => {
    return (
        <>
            <div className={'relative'}>
                <Image
                    src="/crux_main01.png"
                    width={1960}
                    height={960}
                    alt={''}
                />

                <div className={'absolute w-full bottom-[5%] text-center transform text-txt-01'}>
                    <h1 className={'font-extrabold text-50'}>CRUX, 해답을 찾다.</h1>
                    <p className={'text-24 pt-[20px] pb-[60px]'}>어려운 문제의 해답을 찾고 같이 Crux를 넘어갑시다.</p>
                    <SolutionButton/>
                </div>
            </div>
        </>
    );
};

export default MainForm;
