'use client'
import React from 'react';
import {useSearchParams} from "next/navigation";

export default function ErrorPage() {
    const searchParams = useSearchParams()

    const error = searchParams.get('error')
    return <p className={'text-txt-01 text-center pt-10'}>Sorry, something went wrong <br/>{error}</p>
}

