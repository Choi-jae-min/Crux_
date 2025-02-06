'use client'
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const SideMenu = () => {
    const [selectedMenu, setSelectedMenu] = useState<string | null>("climbingDesc");
    const [subMenuOpen, setSubMenuOpen] = useState<boolean>(true);

    const handleMenuClick = (menu: string) => {
        if (selectedMenu === menu) {
            setSubMenuOpen(!subMenuOpen);
        } else {
            setSelectedMenu(menu);
            setSubMenuOpen(true);
        }
    };

    return (
        <ul className="w-full px-[50px] p-4 select-none text-18">
            <li
                className={`cursor-pointer pt-10 ${
                    selectedMenu === "climbingDesc" ? "text-red-500 font-bold list-disc" : "pl-6 list-none"
                }`}
                onClick={() => handleMenuClick("climbingDesc")}
            >
                <span className="flex items-center justify-between">
                    <p>클라이밍 이란?</p>
                    {subMenuOpen && selectedMenu === "climbingDesc" ? (
                        <IoIosArrowUp color={'#999999'} />
                    ) : (
                        <IoIosArrowDown color={'#999999'} />
                    )}
                </span>
                {selectedMenu === "climbingDesc" && subMenuOpen && (
                    <ul className="pl-3 mt-2 space-y-1 font-normal text-16">
                        <li className="text-txt-03 hover:text-txt-02">소개 / 종류</li>
                        <li className="text-txt-03 hover:text-txt-02">운동효과</li>
                    </ul>
                )}
            </li>
            <li
                className={`cursor-pointer pt-5 ${
                    selectedMenu === "etiquette" ? "text-red-500 font-bold list-disc" : "pl-6 list-none"
                }`}
                onClick={() => handleMenuClick("etiquette")}
            >
                <span className="flex items-center justify-between">
                    <p>Etiquette (에티켓)</p>
                    {selectedMenu === "etiquette" && subMenuOpen ? (
                        <IoIosArrowUp color={'#999999'}/>
                    ) : (
                        <IoIosArrowDown color={'#999999'}/>
                    )}
                </span>
                {selectedMenu === "etiquette" && subMenuOpen && (
                    <ul className="pl-3 mt-2 space-y-1 font-normal">
                        <li className="text-txt-03 hover:text-txt-02">소개 / 종류</li>
                        <li className="text-txt-03 hover:text-txt-02">운동효과</li>
                    </ul>
                )}
            </li>
            <li
                className={`cursor-pointer pt-5 ${
                    selectedMenu === "holdTypes" ? "text-red-500 font-bold list-disc" : "pl-6 list-none"
                }`}
                onClick={() => handleMenuClick("holdTypes")}
            >
                <span className="flex items-center justify-between">
                    <p>홀드 종류</p>
                    {selectedMenu === "holdTypes" && subMenuOpen ? (
                        <IoIosArrowUp color={'#999999'}/>
                    ) : (
                        <IoIosArrowDown color={'#999999'}/>
                    )}
                </span>
                {selectedMenu === "holdTypes" && subMenuOpen && (
                    <ul className="pl-3 mt-2 space-y-1 font-normal">
                        <li className="text-txt-03 hover:text-txt-02">소개 / 종류</li>
                        <li className="text-txt-03 hover:text-txt-02">운동효과</li>
                    </ul>
                )}
            </li>
            <li
                className={`cursor-pointer pt-5 ${
                    selectedMenu === "terms" ? "text-red-500 font-bold list-disc" : "pl-6 list-none"
                }`}
                onClick={() => handleMenuClick("terms")}
            >
                <span className="flex items-center justify-between">
                    <p>클라이밍 용어</p>
                    {selectedMenu === "terms" && subMenuOpen ? (
                        <IoIosArrowUp color={'#999999'}/>
                    ) : (
                        <IoIosArrowDown color={'#999999'}/>
                    )}
                </span>
                {selectedMenu === "terms" && subMenuOpen && (
                    <ul className="pl-3 mt-2 space-y-1 font-normal">
                        <li className="text-txt-03 hover:text-txt-02">소개 / 종류</li>
                        <li className="text-txt-03 hover:text-txt-02">운동효과</li>
                    </ul>
                )}
            </li>
        </ul>
    );
};

export default SideMenu;
