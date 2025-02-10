'use client'
import React, {ButtonHTMLAttributes, FC} from 'react';
import {SlArrowRight} from "react-icons/sl";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className? : string;
    loading ? : boolean;
    text : string;
}
const MainButton:FC<Props> = ({className , onClick, text, loading}) => {
    return (
        <button
            className={`mx-4 text-14 font-light border border-txt-point text-txt-point rounded-full flex items-center justify-between w-full px-6 py-2.5 max-w-[288px] cursor-pointer 
            hover:text-white hover:bg-txt-point
            ${className}`}
            onClick={onClick}
        >
                {text}
            <SlArrowRight />
        </button>
    );
};

export default MainButton;
