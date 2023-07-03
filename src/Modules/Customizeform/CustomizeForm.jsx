import React from 'react';
import './CustomizeForm.css';
import DropDownList from '../../UI/DropDownList/DropDownList.jsx';
import RadioInput from '../../UI/RadioInput/RadioInput.jsx';
import PurpleInput from '../../UI/PurpleInput/PurpleInput.jsx';
import { useForm } from 'react-hook-form';
import BlackBtn from '../../UI/BlackBtn/BlackBtn';
import background from '../../img/tourposterbackground.png'
import Btn from '../../UI/Btn/Btn';

const CustomizeForm = props => {
    const {title, minCost} = JSON.parse(localStorage.choosedTour)

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
        <form className='CustomizeForm' onSubmit={handleSubmit(sendForm)}>
            <div className="flex">
                <DropDownList head='Choose' body={['Choose', 'asd', 'asd']} width='210px' title='Location from' refs={register("Select")}></DropDownList>
                <DropDownList head='Choose' body={['Choose', 'asd', 'asd']} width='210px' title='to' refs={register("SelectSecond")}></DropDownList>
            </div>
            <div className="flex">
                <DropDownList head='Choose' body={['Choose', 'asd', 'asd']} width='210px' title='Location from' refs={register("Select3")}></DropDownList>
                <DropDownList head='Choose' body={['Choose', 'asd', 'asd']} width='210px' title='to' refs={register("Select4")}></DropDownList>
            </div>
            <DropDownList head='Surprise me' body={['Choose', 'asd', 'asd']} width='100%' title='Model of supercar' refs={register("Select5")}></DropDownList>
            <div className="flex">
                <DropDownList head='Choose' body={['Choose', 'asd', 'asd']} width='210px' title='Location from' refs={register("Select6")}></DropDownList>
                <DropDownList head='Choose' body={['Choose', 'asd', 'asd']} width='210px' title='to' refs={register("Select7")}></DropDownList>
            </div>
            <div className="flex">
                <DropDownList head='Choose' body={['Choose', 'asd', 'asd']} width='210px' title='Location from' refs={register("Select8")}></DropDownList>
                <DropDownList head='Choose' body={['Choose', 'asd', 'asd']} width='210px' title='to' refs={register("Select9")}></DropDownList>
            </div>
            <div className="flex">
                <DropDownList head='2' body={['Choose', 'asd', 'asd']} width='210px' title='Number of people' refs={register("Select10")}></DropDownList>
                <RadioInput refer={register("DriverSecond")}></RadioInput>
            </div>

            <p className="error">
                {errors.Name?.message}
            </p>
            <PurpleInput inputName='Name' refer={register("Name", {
                required: true,
                pattern: {
                    value: /^[A-ZA-Z][a-zA-Z0-9-_\.]{1,20}$/,
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
                    value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                    message: 'this input should be email',
                },
            })}></PurpleInput>

            <div className='prod-img' src={background} alt="prod-img">
                <h2 className='CustomizeForm__title'>{title}</h2>
                <h2 className='CustomizeForm__minCost'>€ {minCost}</h2>
            </div>
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
    );
};

export default CustomizeForm;