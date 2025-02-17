import {use} from "react";

export default function ErrorPage(props) {
    const searchParams = use(props.searchParams)
    const message = searchParams.message

    return <p className={'text-txt-01 text-center pt-10'}>Sorry, something went wrong <br/>{message}</p>
}

