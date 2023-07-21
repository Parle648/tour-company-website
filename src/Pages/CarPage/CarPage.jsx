import React from 'react';
import './CarPage.scss';
import changeBackground from '../../utils/changeBackground';
import clock from '../../img/clock.svg'
import tickets from '../../img/airplanetickets.svg'
import person from '../../img/person.svg'
import car from '../../img/car.svg'
import heartprotect from '../../img/hardprotect.svg'
import medicinebag from '../../img/medicinebag.svg'
import lamborguni from '../../img/lamborguni.png'
import { useForm } from 'react-hook-form';
import DropDownList from '../../components/UI/DropDownList/DropDownList';
import RadioInput from '../../components/UI/RadioInput/RadioInput';
import PurpleInput from '../../components/UI/PurpleInput/PurpleInput';
import BlackBtn from '../../components/UI/BlackBtn/BlackBtn';
import Btn from '../../components/UI/Btn/Btn';
import Footer from '../../components/Footer/Footer.jsx';

const BookCar = props => {
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
            <h2>Book Supercars</h2>
            <div className="BookPage__block">
                <div className="BookPage__left">
                    <img className='BookPage__img' src={lamborguni} alt='BookPage__img'/>
                    <h2 className='BookPage__ttl'>Lux Trips gives you access to the most prestigious cars on the market.</h2>
                    <p className='BookPage__paragraph'>
                        All the latest top-of-the-range models described by elegance, class and technology are among our wide range of rentals and hiring.
                    </p>
                    <p className='BookPage__paragraph'>
                        Do you wish to feel like a Formula 1 driver and test the famous circuit in Monza? Or do you prefer to sit back and relax while our driver brings you across the most picturesque Amalfi coast? All you have to do is choose the destination and we will arrange the rest!
                    </p>
                    <div className="BookPage__left-advisor-container">
                        <div className="BookPage__left-advisor">
                            <img className='BookPage__advision-img' src={clock} alt="clock" />
                            <span className='BookPage__advision-ttl'>Dedicated 24/7 Travel Advisor</span>
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
                    <div className="flex">
                        <DropDownList reset={reset} body={['Choose', 'asd', 'asd']} width='210px' title='Location from' refs={register("LocationFrom")}>
                            {['Choose', 'asd', 'asd']}
                        </DropDownList>
                        {document.body.clientWidth > 600 && <span className='line'>-</span>}
                        <DropDownList reset={reset} body={['Choose', 'asd', 'asd']} width='210px' title='to' refs={register("LocationTo")}>
                            {['Choose', 'asd', 'asd']}
                        </DropDownList>
                    </div>
                    <div className="flex">
                        <DropDownList reset={reset} body={['Choose', 'asd', 'asd']} width='210px' title='Dates' refs={register("DatesFrom")}>
                            {['Choose', 'asd', 'asd']}
                        </DropDownList>
                        {document.body.clientWidth > 600 && <span className='line'>-</span>}
                        <DropDownList reset={reset} body={['Choose', 'asd', 'asd']} width='210px' title='' refs={register("DatesTo")}>
                            {['Choose', 'asd', 'asd']}
                        </DropDownList>
                    </div>
                    <DropDownList reset={reset} body={['Choose', 'asd', 'asd']} width={document.body.clientWidth > 600 ? '100%' : '210px'} title='Model of supercar' refs={register("Supercar")}>
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
                        <RadioInput refer={register("Driver")}></RadioInput>
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
            <Footer />
        </div>
    );
};

export default BookCar;