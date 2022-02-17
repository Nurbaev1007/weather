import React from 'react';
import styles from "../Header/Header.module.css";
import axios from "axios";

const Form = ({setCurrent, setFiveDays, setDate, isLight}) => {
    const getWeatherUseCityName = (e) => {
        e.preventDefault();
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${e.target[0].value}&appid=82ccd68e01fb3ca0e8f8811b82fe9a32`)
            .then(({data}) => setCurrent(data))
            .catch(() => alert('We can not find your city'));

        axios(`https://api.openweathermap.org/data/2.5/forecast?q=${e.target[0].value}&appid=82ccd68e01fb3ca0e8f8811b82fe9a32`)
            .then(({data}) => {
                setFiveDays(data.list);
                setDate(data.list[0].dt_txt.slice(0, 10))
            });
        e.target[0].value= ''
    };

    return (
        <form className={styles.form} onSubmit={getWeatherUseCityName}>
            <input className={`${styles.input} ${isLight ? styles.light : ''}`} placeholder="Choose your city" type="search" required/>
            <button className={`${styles.button} ${isLight ? styles.light : ''}`} type="submit">Search</button>
        </form>
    );
};

export default Form;