import React from 'react';
import './CustomizeForm.css';
import DropDownList from '../../UI/DropDownList/DropDownList.jsx';
import RadioInput from '../../UI/RadioInput/RadioInput.jsx';
import PurpleInput from '../../UI/PurpleInput/PurpleInput.jsx';
import { useForm } from 'react-hook-form';

const CustomizeForm = props => {

    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
        reset,
    } = useForm({
        method: 'onBlur'
    })

    const sendForm = (data) => {
        console.log(data)
        reset()
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
            <PurpleInput  refer={register("Name", {
                required: true,
            })} ></PurpleInput>
            <PurpleInput  refer={register("Email", {
                required: true,
            })}></PurpleInput>
            <input type="submit" />
        </form>
    );
};

export default CustomizeForm;