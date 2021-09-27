import style from './topbar.module.scss';
import Link from 'next/link';

export default function TopBar() {
    return (
        <div className={style.topBar}>
            <h1>Tabela periódica</h1>
            <Link href='/'>
                <h1>Voltar</h1>
            </Link>
        </div>
    );
}