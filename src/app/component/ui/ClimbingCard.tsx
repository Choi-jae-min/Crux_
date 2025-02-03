import React, {FC} from 'react';
import Image from "next/image";
interface Props {
    title : string
    description : string[]
}
const ClimbingCard:FC<Props> = ({title, description}) => {
    return (
        <div className={'text-txt-02'}>
            <Image
                src="/articles/lead_grid.png"
                width={291}
                height={292}
                alt={''}
            />
            <h2 className={'text-12 xl:text-16 text-nowrap font-bold text-txt-01 pb-1.5 pt-8'}>{title}리드(Lead) 클라이밍</h2>
            {description.map((desc, index) => {
                return <p className={'text-12 md:text-14 xl:text-16 py-1.5'} key={index}>{desc}</p>
            })}
        </div>
    );
};

export default ClimbingCard;