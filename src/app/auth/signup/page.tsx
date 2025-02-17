import React from 'react';
import {signup} from "@/app/auth/actions";

const Page = () => {
    return (
        <form className={'text-txt-01 pt-10 px-10 space-x-2'}>
            <label htmlFor="email">Email:</label>
            <input className={'border rounded'} id="email" name="email" type="email" required />
            <label htmlFor="password">Password:</label>
            <input className={'border rounded'} id="password" name="password" type="password" required />
            <button className={'border rounded px-2'} formAction={signup}>Sign up</button>
        </form>
    );
};

export default Page;