import style from './card.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import tableIcon from '../../public/images/periodicTableIcon.png';

export default function Card( { att } ) {
    function onHover(): void {
        document.getElementById(att.app).textContent = `-> ${att.description}`;
    }
    function notOnHover(): void {
        document.getElementById(att.app).textContent = "";
    }

    return (
        <div className={style.cardTop} onMouseOver={onHover} onMouseOut={notOnHover}>
            <div>
                <Link href={`/apps/${att.app}`}>
                    <h1>{`› ${att.appName}`}</h1>
                </Link>
                <h2 id={att.app}>{}</h2>
            </div> 
        </div>
    );
    
}