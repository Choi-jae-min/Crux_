import {use} from "react";
export default function ErrorPage(props : {searchParams: Promise<{ [key: string]: string | undefined }> }) {
    const searchParams = use(props.searchParams)
    const message = searchParams.message || 'No message provided'

    return <p className={'text-txt-01 text-center pt-10'}>Sorry, something went wrong <br/>{message}</p>
}

