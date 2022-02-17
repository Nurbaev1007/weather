import React from 'react';
import styles from './MainFooter.module.css'

const MainFooter = ({fiveDays, date, setDate, isLight}) => {
    const {title, listDate, itemDate, row, card, cardTitle, tempMax, tempMin, description, itemDateActive, light} = styles;
    return (
        <>
                <h2 className={title}>5 days</h2>
                <ul className={listDate}>

                    {
                        [...new Set(
                            fiveDays.map((elem) => elem.dt_txt.slice(0,10))
                        )].map((elem) => (
                            <li key={elem}
                                className={`${itemDate} ${date === elem ? itemDateActive : ''} ${isLight ? light : ''} `}
                                onClick={() => setDate(elem)}
                            >{elem}</li>
                        ))
                    }
                </ul>

                <div className={`${row} ${isLight ? light : ''}`}>

                    {
                        (fiveDays.filter((item) => item.dt_txt.includes(date)).map((item) => (
                                <div key={item.dt_txt} className={`${card} ${isLight ? light : ''}`}>
                                    <h3 className={cardTitle}>{item.dt_txt.slice(11,16)}</h3>
                                    <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="Icon weather"/>
                                    <p className={tempMax}>{(item.main.temp_max - 273.15).toFixed()}°</p>
                                    <p className={tempMin}> {(item.main.temp_min - 273.15).toFixed()}°</p>
                                    <p className={description}>{item.weather[0].description}</p>
                                </div>
                        )))
                    }


                </div>
        </>
    );
};

export default MainFooter;