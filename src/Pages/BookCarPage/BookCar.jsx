import React from 'react';
import './BookCar.css';
import clock from '../../img/clock.svg'
import tickets from '../../img/airplanetickets.svg'
import person from '../../img/person.svg'
import car from '../../img/car.svg'
import heartprotect from '../../img/hardprotect.svg'
import medicinebag from '../../img/medicinebag.svg'
import lamborguni from '../../img/lamborguni.png'
import { useForm } from 'react-hook-form';
import DropDownList from '../../UI/DropDownList/DropDownList';
import RadioInput from '../../UI/RadioInput/RadioInput';
import PurpleInput from '../../UI/PurpleInput/PurpleInput';
import BlackBtn from '../../UI/BlackBtn/BlackBtn';
import Btn from '../../UI/Btn/Btn';

const BookCar = props => {
    React.useEffect(() => {
        if ( document.querySelector('.active') === null ) {
            document.querySelector('.MainFirstBlock').classList.add('MainFirstBlock_active')
            document.querySelector('.Header').classList.add('Header_active')
        }
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
            }}>Book Supercars</h2>
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
                <form className='BookPage__form' onSubmit={handleSubmit(sendForm)}>
                    <div className="flex">
                        <DropDownList body={['Choose', 'asd', 'asd']} width='210px' title='Location from' refs={register("Select")}>
                            {['Choose', 'asd', 'asd']}
                        </DropDownList>
                        <DropDownList body={['Choose', 'asd', 'asd']} width='210px' title='to' refs={register("SelectSecond")}>
                            {['Choose', 'asd', 'asd']}
                        </DropDownList>
                    </div>
                    <div className="flex">
                        <DropDownList body={['Choose', 'asd', 'asd']} width='210px' title='Location from' refs={register("Select3")}>
                            {['Choose', 'asd', 'asd']}
                        </DropDownList>
                        <DropDownList body={['Choose', 'asd', 'asd']} width='210px' title='to' refs={register("Select4")}>
                            {['Choose', 'asd', 'asd']}
                        </DropDownList>
                    </div>
                    <DropDownList body={['Choose', 'asd', 'asd']} width='100%' title='Model of supercar' refs={register("Select5")}>
                        {['Choose', 'asd', 'asd']}
                    </DropDownList>
                    <div className="flex">
                        <DropDownList body={['Choose', 'asd', 'asd']} width='210px' title='Location from' refs={register("Select6")}>
                            {['Choose', 'asd', 'asd']}
                        </DropDownList>
                        <DropDownList body={['Choose', 'asd', 'asd']} width='210px' title='to' refs={register("Select7")}>
                            {['Choose', 'asd', 'asd']}
                        </DropDownList>
                    </div>
                    <div className="flex">
                        <DropDownList body={['Choose', 'asd', 'asd']} width='210px' title='Location from' refs={register("Select8")}>
                            {['Choose', 'asd', 'asd']}
                        </DropDownList>
                        <DropDownList body={['Choose', 'asd', 'asd']} width='210px' title='to' refs={register("Select9")}>
                            {['Choose', 'asd', 'asd']}
                        </DropDownList>
                    </div>
                    <div className="flex">
                        <DropDownList body={['Choose', 'asd', 'asd']} width='210px' title='Number of people' refs={register("Select10")}>
                            {['Choose', 'asd', 'asd']}
                        </DropDownList>
                        <RadioInput refer={register("DriverSecond")}></RadioInput>
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

                    <label >
                        <BlackBtn innerText='Book now' width='444' onSubmit={handleSubmit(sendForm)} />
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

export default BookCar;