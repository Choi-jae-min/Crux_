import React, {FC} from 'react';

interface Props {
    text : string
    className? : string
}
const MainBadge:FC<Props> = ({text , className}) => {
    return (
        <div className={`border border-txt-point text-center text-txt-point bg-white rounded-full py-2.5 items-center text-14 ${className}`}>
            {text}
        </div>
    );
};

export default MainBadge;