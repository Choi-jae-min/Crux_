import Header from "@/app/component/ui/Header";
import MainForm from "@/app/mainForm";
import Image from "next/image";
import SolutionButton from "@/app/component/buttons/solutionButton";
import React from "react";

export default function Home() {
  return (
    <main>
        <Header/>
        <div id={'main_banner'} className={'relative'}>
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

        <div className="grid grid-flow-col grid-rows-3 text-txt-01 border-b mt-[100px]">
            <div className="row-span-3 border-r flex justify-center">
                <span className={'flex flex-col text-nowrap text-txt-point font-bold'}>
                    <h2>Climbing Guide</h2>
                </span>
            </div>
            <div className="col-span-2 border-b w-full">
                <h3>클라이밍이란? / 소개, 종류</h3>
            </div>
            <div className="col-span-2 row-span-2 w-full">
                <h3>장비 / 필수장비, 선택장비</h3>
            </div>
        </div>
    </main>
  );
}
