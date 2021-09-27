import style from './square.module.scss';
import Overlay from '../overlay';
import { useState } from 'react';

export default function Square({ el, filled, color }) {
    const [clicked, setClicked] = useState(0);

    function invokeOverlay(): void {
        console.log(`square ${el.symbol} clicked`);
        setClicked(1);
    }

    if (filled === 'true') {
        return (
            <>
            <div className={style.square} style={{ backgroundColor: color }} onClick={invokeOverlay}>
                <div className={style.innerText}>
                    <p>{el.atomicNumber}</p>
                    <h1>{el.symbol}</h1>
                    <h2>{el.name}</h2>
                </div> 
            </div>
            { (clicked == 1) && <Overlay el={el} setClicked={setClicked} /> }
            </>
        );
    } else return ( <div className={style.emptySquare}></div> );
}