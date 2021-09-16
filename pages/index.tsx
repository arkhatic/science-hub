import Head from 'next/head';
import Link from 'next/link';
import style from '../styles/pages/home.module.scss';
import Card from '../components/card';
import image from '../public/images/profile.jpg';
import apps from '../database';

export default function App() {
    let els: JSX.Element[] = [];
    for (let i in apps) {
        els.push(<Card att={apps[i]} />)
    }

    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <div className={style.title}>
                    <h1>Boas vindas ao <span>Science Hub</span></h1>
                    <p>O hub de vários apps relacionados à ciência.</p>
                </div>  
            </div>

            <div className={style.dashboard}>
                <div className={style.dashboardTitle}>
                    <h1>Desde sorting algorithms a tabelas periódicas interativas; <br></br> totalmente contruído em <span>Typescript</span>.
                    </h1>
                </div>

                <div className={style.dashboardContentInherit}>
                    <div className={style.dashboardContent}>
                        {els}
                    </div>
                </div>
            </div>
        </div>
    )
}