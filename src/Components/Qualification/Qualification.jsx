import React, { useState } from 'react';
import "./qualification.css";

function Qualification() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index)=>{
        setToggleState(index);
    };
  return (
    <section className='qualification section'>
        <h2 className='section__title'>Qualification</h2>
        <span className='section__subtitle'>My Personal Journey</span>
        <div className='qualification__container container'>
            <div className='qualification__tabs'>
                <div className={toggleState===1?"qualification__button qualification__active button--flex" : 
                "qualification__button button--flex"} onClick={()=>toggleTab(1) }>
                    <i className='uil uil-graduation-cap qualification__icon'></i>{""} Education
                </div>
                
                </div>
                <div className='qualification__sections'>
                    <div className= {toggleState ===1 ?
                     "qualification__content qualification__content-active":
                "qualification__content"}>
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>SSLC</h3>
                                <span className='qualification__subtitle'>
                                ponnaiyah ramajayam public school (CBSE),kumbakonam
                                </span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i> 2016
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>
                        <div className='qualification__data'>
                            <div></div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>HSLC</h3>
                                <span className='qualification__subtitle'>
                                arr matriculation Higher Secondary School,kumbakonam
                                </span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i>  2018
                                </div>
                            </div>

                        </div>
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>UG (BCA)</h3>
                                <span className='qualification__subtitle'>
                                Nehru Arts And Science College,coimbatore
                                </span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i>  2019-2022
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>
                    </div>

                    
                </div>
            
        </div>

    </section>
  )
}

export default Qualification