import React from 'react';
import './CustomizeForm.scss';
import DropDownList from '../../components/UI/DropDownList/DropDownList.jsx';
import RadioInput from '../../components/UI/RadioInput/RadioInput.jsx';
import PurpleInput from '../../components/UI/PurpleInput/PurpleInput.jsx';
import { useForm } from 'react-hook-form';
import BlackBtn from '../../components/UI/BlackBtn/BlackBtn';
import background from '../../img/tourposterbackground.png'
import Btn from '../../components/UI/Btn/Btn';

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
                <DropDownList reset={reset} body={['Choose', 'asd', 'asd']} width='210px' title='Location from' refs={register("Select")}>
                    {['Choose', 'asd', 'asd']}
                </DropDownList>
                <DropDownList reset={reset} body={['Choose', 'asd', 'asd']} width='210px' title='to' refs={register("SelectSecond")}>
                    {['Choose', 'asd', 'asd']}
                </DropDownList>
                </div>
                <div className="flex">
                    <DropDownList reset={reset} body={['Choose', 'asd', 'asd']} width='210px' title='Location from' refs={register("Select3")}>
                        {['Choose', 'asd', 'asd']}
                    </DropDownList>
                    <DropDownList reset={reset} body={['Choose', 'asd', 'asd']} width='210px' title='to' refs={register("Select4")}>
                        {['Choose', 'asd', 'asd']}
                    </DropDownList>
                </div>
                <DropDownList reset={reset} body={['Choose', 'asd', 'asd']} width={document.body.clientWidth > 510 ? '100%' : '210px'} title='Model of supercar' refs={register("Select5")}>
                    {['Choose', 'asd', 'asd']}
                </DropDownList>
                <div className="flex">
                    <DropDownList reset={reset} body={['Choose', 'asd', 'asd']} width='210px' title='Location from' refs={register("Select6")}>
                        {['Choose', 'asd', 'asd']}
                    </DropDownList>
                    <DropDownList reset={reset} body={['Choose', 'asd', 'asd']} width='210px' title='to' refs={register("Select7")}>
                        {['Choose', 'asd', 'asd']}
                    </DropDownList>
                </div>
                <div className="flex">
                    <DropDownList reset={reset} body={['Choose', 'asd', 'asd']} width='210px' title='Location from' refs={register("Select8")}>
                        {['Choose', 'asd', 'asd']}
                    </DropDownList>
                    <DropDownList reset={reset} body={['Choose', 'asd', 'asd']} width='210px' title='to' refs={register("Select9")}>
                        {['Choose', 'asd', 'asd']}
                    </DropDownList>
                </div>
                <div className="flex">
                    <DropDownList reset={reset} body={['Choose', 'asd', 'asd']} width='210px' title='Number of people' refs={register("Select10")}>
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

            <div className='prod-img' src={background} alt="prod-img">
                <h2 className='CustomizeForm__title'>{title}</h2>
                <h2 className='CustomizeForm__minCost'>€ {minCost}</h2>
            </div>
            <label >
                <BlackBtn innerText='Book now' width={document.body.clientWidth > 800 ? '444' : '210'} onSubmit={handleSubmit(sendForm)} />
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