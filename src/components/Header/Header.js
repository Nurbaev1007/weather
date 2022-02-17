import React from 'react';
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'
import Form from "../Form/Form";

const Header = ({setCurrent, setFiveDays, setDate, isLight, setIsLight}) => {

    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.nav}>
                    <div className={styles.part}>
                        <img src={logo} alt="logo" className={styles.logo}/>
                        <h1 className={styles.title}>React weather</h1>
                    </div>

                    <div className={styles.part}>
                        <span className={`${styles.theme} ${isLight ? styles.light : ''}`} onClick={() => setIsLight(!isLight)}>
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.6667 7.09792V27.7917C12.8396 27.7917 8.91667 23.9562 8.91667 19.2312C8.91667 16.9562 9.82083 14.8125 11.4687 13.1937L17.6667 7.09792ZM17.6667 3L9.42708 11.1083C7.3125 13.1937 6 16.0667 6 19.2312C6 25.575 11.2208 30.7083 17.6667 30.7083C24.1125 30.7083 29.3333 25.575 29.3333 19.2312C29.3333 16.0667 28.0208 13.1937 25.9062 11.1083L17.6667 3Z" fill="#FFFFFF"/>
</svg>
                        </span>

                        <Form setDate={setDate} setCurrent={setCurrent} setFiveDays={setFiveDays} isLight={isLight}/>
                    </div>
                </nav>
            </div>
        </header>
    )
        ;
};

export default Header;