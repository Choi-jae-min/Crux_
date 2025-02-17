import React from 'react';
import HeaderRight from "@/app/component/ui/header_right";
import {createClient, isSessionValid} from "@/utils/supabase/server";
import {redirect} from "next/navigation";

const Header = async () => {
    const supabase = await createClient()
    const { data : {session}, error } = await supabase.auth.getSession()

    if(!error) {
        return redirect(`/error?message=tlqkf`)
    }
    const sessionValid = isSessionValid(session);
    return (
        <header className={'flex items-center justify-between mx-auto px-[60px] py-[20px] select-none'}>
            <span className={'font-[1000] flex text-24'}>
                <p className={'text-txt-01'}>CRU</p>
                <p className={'text-txt-point'}>X</p>
            </span>

            <ul className={'hidden md:flex justify-around w-2/3 text-txt-02 text-12 xl:text-16 text-nowrap'}>
                <li>C- Guide</li>
                <li>GYM List</li>
                <li>Climb Record</li>
                <li>Crew</li>
                <li>Climb Videos</li>
                <li>Community</li>
                <li>About us</li>
            </ul>

            <HeaderRight isLogin={sessionValid}/>
        </header>
    );
};

export default Header;
