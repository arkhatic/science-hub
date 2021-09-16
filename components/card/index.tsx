import style from './card.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Card( { att } ) {
    const myLoader = ({ src, width, height }) => {
        return att.image;
    }

    return (
        <div className={style.cardTop}>
        <Link href={`/apps/${att.app}`}>
            <div className={style.card}>
                <img src={att.image} />
                <h1>{att.appName}</h1>
                <h2>{att.description}</h2>
            </div>
        </Link>
        </div>
    );
    
}