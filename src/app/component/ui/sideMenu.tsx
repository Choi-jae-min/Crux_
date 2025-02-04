'use client'
import React from 'react';

const SideMenu = () => {
    const [selectedMenu, setSelectedMenu] = React.useState('climbingDesc');

    return (
        <section className={'select-none'}>
            <div className={'flex flex-col space-y                                                                        -2'}>
                <li
                    id={'climbingDesc'}
                    className={`${selectedMenu !== 'climbingDesc' && 'list-none'}`}
                    onClick={(_) =>{setSelectedMenu('climbingDesc')}}
                >
                    클라이밍 이란?
                </li>
                <li
                    id={'Etiquette'}
                    className={`${selectedMenu !== 'Etiquette' && 'list-none'}`}
                    onClick={(_) =>{setSelectedMenu('Etiquette')}}
                >
                    Etiquette (에티켓)
                </li>
                <li
                    id={'kindOfHold'}
                    onClick={(_) =>{setSelectedMenu('kindOfHold')}}
                    className={`${selectedMenu !== 'kindOfHold' && 'list-none'}`}
                >
                    홀드 종류
                </li>
                <li
                    id={'climbingVoca'}
                    className={`${selectedMenu !== 'climbingVoca' && 'list-none'}`}
                    onClick={(_) =>{setSelectedMenu('climbingVoca')}}
                >
                    클라이밍 용어
                </li>
            </div>
            
        </section>
    );
};

export default SideMenu;