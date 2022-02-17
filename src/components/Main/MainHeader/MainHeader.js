import React from 'react';
import styles from './MainHeader.module.css'
import therm from '../../../assets/icons/thermometer.svg'
import minidrop from '../../../assets/icons/humidity.svg'
import prec from '../../../assets/icons/evaporator.svg'
import wind from '../../../assets/icons/wind.svg'
import cloud from '../../../assets/cloud.svg'

const MainHeader = ({current, isLight}) => {

    const addZero = (num) => {
        if (num < 10) return `0${num}`;
        else return num
    };

    const cityTime = () => {
        let d = new Date(),
            utc = d.getTime() + (d.getTimezoneOffset() * 60000),
            nd = new Date(utc + (1000 * current.timezone)),
            hours = addZero(nd.getHours()),
            minutes = addZero(nd.getMinutes());
        return `${hours} : ${minutes}`
    };
    return (
        <div className={styles.mainHeader}>
            <div  className={`${styles.left} ${isLight ? styles.light : ''}`}>
                <div className={styles.leftTop}>
                    <div className={styles.leftTopLeft}>
                        <p className={styles.deg}>{(current.main.temp - 273.15).toFixed()}°</p>
                        <p className={styles.today}>Today</p>
                    </div>
                    <img className={styles.weatherIcon} src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`} alt="Icon"/>
                </div>
                <p className={styles.infotext}>Time :  {cityTime()}</p>
                <p className={styles.infotext}>City : {current.name}</p>
            </div>

            <div className={`${styles.right} ${isLight ? styles.light : ''}`}>
                <img className={styles.bg} src={cloud} alt="Cloud"/>
                <div className={styles.block}>
                    <div className={styles.circle}>
                        <img src={therm} alt="Thermometer"/>
                    </div>
                    <p className={styles.descr}>Temperature</p>
                        <p className={styles.text}>{(current.main.temp - 273.15).toFixed()}° - feels like {(current.main.feels_like - 273.15).toFixed()}°</p>
                </div>
                <div className={styles.block}>
                    <div className={styles.circle}>
                        <img src={minidrop} alt="pressure"/>
                    </div>
                    <p className={styles.descr}>Pressure </p>
                    <p className={styles.text}>{(current.main.pressure)} mmHg</p>
                </div>
                <div className={styles.block}>
                    <div className={styles.circle}>
                        <img src={prec} alt="Prec"/>
                    </div>
                    <p className={styles.descr}>Precipitation</p>
                    <p className={styles.text}>{current.weather[0].description}</p>
                </div>
                <div className={styles.block}>
                    <div className={styles.circle}>
                        <img src={wind} alt="Wind"/>
                    </div>
                    <p className={styles.descr}>Wind</p>
                    <p className={styles.text}>{(current.wind.speed.toFixed())} m/s</p>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;