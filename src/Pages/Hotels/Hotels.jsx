import React from 'react';
import PropTypes from 'prop-types';
import '../CarPage/CarPage.scss';
import clock from '../../img/clock.svg'
import tickets from '../../img/airplanetickets.svg'
import person from '../../img/person.svg'
import car from '../../img/car.svg'
import road from '../../img/road.svg'
import heartprotect from '../../img/hardprotect.svg'
import medicinebag from '../../img/medicinebag.svg'
import hotels from '../../img/hotels.png'
import { useForm } from 'react-hook-form';
import DropDownList from '../../components/UI/DropDownList/DropDownList';
// import RadioInput from '../../components/UI/RadioInput/RadioInput';
import PurpleInput from '../../components/UI/PurpleInput/PurpleInput';
import BlackBtn from '../../components/UI/BlackBtn/BlackBtn';
import Btn from '../../components/UI/Btn/Btn';

import changeBackground from '../../utils/changeBackground';

const Hotels = props => {
    React.useEffect(() => {
        changeBackground()
    }, [])

    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur',
    })

    const sendForm = (data) => {
        console.log(data)
        reset();
    }

    return (
        <div className='BookCar'>
            <h2 style={{
                width: '100%',
                marginTop: '-139px',
                position: 'absolute',
                textAlign: 'center',
                fontSize: '60px',
                lineHeight: '58px',
                fonrWeight: '400'
            }}>Book Hotels</h2>
            <div className="BookPage__block">
                <div className="BookPage__left">
                    <img className='BookPage__img' src={hotels} alt='BookPage__img'/>
                    <h2 className='BookPage__ttl'>Do you need to organize an event, a leisure getaway or a business trip?</h2>
                    <p className='BookPage__paragraph'>
                        We will do it for you! Our exclusive offers in globally renowned hotels and local boutique accommodations will bring your stay to another level. Absolute discretion and highest level comfort and professionalism paired with attention to your every wish are our primary guidelines in selecting the hotel for your next trip. 
                    </p>
                    <div className="BookPage__left-advisor-container">
                        <div className="BookPage__left-advisor">
                            <img className='BookPage__advision-img' src={clock} alt="clock" />
                            <span className='BookPage__advision-ttl'>Dedicated 24/7 Travel Advisor</span>
                        </div>
                        <div className="BookPage__left-advisor">
                            <img className='BookPage__advision-img' src={road} alt="road" />
                            <span className='BookPage__advision-ttl'>Personalized itinerary</span>
                        </div>
                        <div className="BookPage__left-advisor">
                            <img className='BookPage__advision-img' src={person} alt="person" />
                            <span className='BookPage__advision-ttl'>Professional drivers and driver-coaches</span>
                        </div>
                        <div className="BookPage__left-advisor">
                            <img className='BookPage__advision-img' src={car} alt="car" />
                            <span className='BookPage__advision-ttl'>Wide selection of cars</span>
                        </div>
                        <div className="BookPage__left-advisor">
                            <img className='BookPage__advision-img' src={medicinebag} alt="medicinebag" />
                            <span className='BookPage__advision-ttl'>Accidental damage protection</span>
                        </div>
                        <div className="BookPage__left-advisor">
                            <img className='BookPage__advision-img' src={heartprotect} alt="heartprotect" />
                            <span className='BookPage__advision-ttl'>Dedicated health insurance</span>
                        </div>
                        <div className="BookPage__left-advisor">
                            <img className='BookPage__advision-img' src={tickets} alt="tickets" />
                            <span className='BookPage__advision-ttl'>Package deals</span>
                        </div>
                    </div>
                </div>
                <form className='BookPage__form' onSubmit={handleSubmit(sendForm)}>
                    <DropDownList reset={reset} body={['Choose', 'asd', 'asd']} width='100%' title='Model of supercar' refs={register("Supercar")}>
                        {['Choose', 'asd', 'asd']}
                    </DropDownList>
                    <div className="flex">
                        <DropDownList reset={reset} body={['Choose', 'asd', 'asd']} width='210px' title='Pick-up location' refs={register("PickUpLocation")}>
                            {['Choose', 'asd', 'asd']}
                        </DropDownList>
                        <DropDownList reset={reset} body={['Choose', 'asd', 'asd']} width='210px' title='Pick-up time' refs={register("PickUpTime")}>
                            {['Choose', 'asd', 'asd']}
                        </DropDownList>
                    </div>
                    <div className="flex">
                        <DropDownList reset={reset} body={['Choose', 'asd', 'asd']} width='210px' title='Drop off location' refs={register("DropOfLocation")}>
                            {['Choose', 'asd', 'asd']}
                        </DropDownList>
                        <DropDownList reset={reset} body={['Choose', 'asd', 'asd']} width='210px' title='Drop off time' refs={register("DropOfTime")}>
                            {['Choose', 'asd', 'asd']}
                        </DropDownList>
                    </div>
                    <div className="flex">
                        <DropDownList reset={reset} body={['Choose', 'asd', 'asd']} width='210px' title='Number of people' refs={register("NumberOfPeople")}>
                            {['1', '2', '3', '4']}
                        </DropDownList>
                        <PurpleInput width='210px' inputName='Budget' title='budget' refer={register("Budget", {
                            required: true,
                        })} ></PurpleInput>
                    </div>

                    <p className="error">
                        {errors.Name?.message}
                    </p>
                    <PurpleInput inputName='Name' refer={register("Name", {
                        required: true,
                        pattern: {
                            value: /^[A-ZA-Z][a-zA-Z0-9-_]{1,20}$/,
                            message: 'this input should begin from capital character',
                        },
                        minLength: {
                            value: 3,
                            message: 'this input should be biggest then 3 characters',
                        },
                    })} ></PurpleInput>
                    <p className="error">
                        {errors.Email?.message}
                    </p>
                    <PurpleInput inputName='Email' refer={register("Email", {
                        required: true,
                        pattern: {
                            value: /^\w+@[a-zA-Z_]+?[a-zA-Z]{2,3}$/,
                            message: 'this input should be email',
                        },
                    })}></PurpleInput>

                    <label className='CustomizeForm__submit-btn'>
                        <BlackBtn innerText='Book now' width={document.body.clientWidth > 600 ? '444' : '210'} onSubmit={handleSubmit(sendForm)} />
                        <input type="submit" style={{display: 'none'}}/>
                        <h2 className='or'>OR</h2>
                    </label>
                    <div className="CustomizeForm__btns-container">
                        <Btn className='CustomizeForm__btn' innertext='call me back'/>
                        <Btn className='CustomizeForm__btn' innertext='email me back '/>
                    </div>
                </form>
            </div>
        </div>
    );
};

Hotels.propTypes = {
    
};

export default Hotels;