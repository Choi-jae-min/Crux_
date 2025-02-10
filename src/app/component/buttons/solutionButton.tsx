import React, { ButtonHTMLAttributes, FC } from "react";
import RightArrow from "../../../../public/icons/right_arrow.svg";
import RightArrowColor from "../../../../public/icons/right_arrow_color.svg";
import {SlArrowRight} from "react-icons/sl";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    loading?: boolean;
}

const SolutionButton: FC<Props> = ({ onClick, disabled, type, className, loading = false }) => {
    return (
        <div className={'px-14 w-full'}>
            <button
                className={`group border border-txt-03 hover:border-txt-point text-txt-01 hover:text-txt-point rounded-full bg-[#F2F2F2] w-[192px] h-[63px]`}
                disabled={disabled || loading}
                type={type}
                onClick={onClick}
            >
              <span className="flex justify-evenly items-center pl-2">
                <p className="pb-1">해답 찾기</p>
                <RightArrow className="block group-hover:hidden" />
                <RightArrowColor className="hidden group-hover:block" />
              </span>
            </button>
        </div>
    );
};

export default SolutionButton;
