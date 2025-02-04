'use client'
import React, {useRef, useState} from 'react';
import ClimbingCard from "@/app/component/ui/ClimbingCard";
import { climbingDescription } from "@/assets/climbingInfo";

const ITEMS_PER_PAGE = 3;

const MainCarousel = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [offsetX, setOffsetX] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const pages = Array.from({ length: Math.ceil(climbingDescription.length / ITEMS_PER_PAGE) }, (_, i) =>
        climbingDescription.slice(i * ITEMS_PER_PAGE, i * ITEMS_PER_PAGE + ITEMS_PER_PAGE)
    );

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setOffsetX(0);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const moveX = e.clientX - startX;
        setOffsetX(moveX);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (Math.abs(offsetX) > 50) {
            if (offsetX < 0 && currentIndex < pages.length - 1) {
                setCurrentIndex((prev) => prev + 1);
            } else if (offsetX > 0 && currentIndex > 0) {
                setCurrentIndex((prev) => prev - 1);
            }
        }
        setOffsetX(0);
    };

    return (
        <div>
            <div className="flex justify-between items-center pt-10">
                <span className="flex font-bold text-24">
                    <p
                        onClick={() => setCurrentIndex(0)}
                        className={`cursor-pointer select-none border-r pr-5 ${currentIndex !== 0 ? 'text-txt-03' : ''} transition-colors`}
                    >
                        스포츠 클라이밍
                    </p>
                    <p
                        onClick={() => setCurrentIndex(1)}
                        className={`cursor-pointer select-none pl-5 ${currentIndex !== 1 ? 'text-txt-03' : ''} transition-colors`}
                    >
                        락(Rock) 클라이밍
                    </p>
                </span>
                <p className="text-txt-03 text-14">*2024 파리 올림픽 기준</p>
            </div>
            <article className="relative">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{
                            transform: `translateX(calc(-${currentIndex * 100}%))`,
                            cursor: isDragging ? "grabbing" : "grab",
                        }}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                    >
                        {pages.map((page, pageIndex) => (
                            <div key={pageIndex} className="flex overflow-hidden min-w-full justify-between space-x-[80px] pt-10 text-txt-02">
                                {page.map((value, index) => (
                                    <ClimbingCard key={index} title={value.title} description={value.description} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    );
};

export default MainCarousel;
