import React from 'react';
import './Main.module.css'
import MainHeader from "./MainHeader/MainHeader";
import MainFooter from "./MainFooter/MainFooter";

const Main = ({current, fiveDays, date, setDate, isLight}) => {
    return (
        <section style={{paddingBottom: 50}}>
            <div className="container">

             <MainHeader current={current} isLight={isLight}/>

             <MainFooter current={current} fiveDays={fiveDays} date={date} setDate={setDate} isLight={isLight}/>

            </div>

        </section>
    );
};

export default Main;