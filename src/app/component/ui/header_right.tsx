'use client'
import React from 'react';
import AuthButton from "@/app/component/buttons/authButton";
import Home from "../../../../public/icons/home.svg";
import Cart from "../../../../public/icons/cart.svg";
import Person from "../../../../public/icons/person.svg";
import Hamburger from "../../../../public/icons/hamburger.svg";
const HeaderRight = () => {
    const [isLogin, setIsLogin] = React.useState<boolean>(false);

    return (
        <>
            {!isLogin && <div className={'flex space-x-5'}>
                <AuthButton onClick={() => {setIsLogin(true)}} variant={'point'} text={'로그인'}/>
                <AuthButton text={'회원가입'}/>
                </div>
            }
            {isLogin &&
                <div className={'flex items-center'}>
                    <Home/>
                    <Cart/>

                    <div className={'w-[124px] ml-5 flex items-center rounded-full justify-center shadow-[rgba(0,_0,_0,_0.24)_0px_0.5px_9px]'}>
                        <Hamburger className={'mr-4'}/>
                        <Person/>
                    </div>
                </div>
            }
        </>
    );
};

export default HeaderRight;