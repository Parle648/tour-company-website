import React from 'react';
import './ContactForm.scss'
import BlackBtn from '../../components/UI/BlackBtn/BlackBtn.jsx';

const ContactForm = props => {

    const viewWidth = document.body.clientWidth

    return (
        <form type='submit' className='ContactForm'>
            <h2 className='ContactForm__ttl'>Contact</h2>
            <input 
                className='ContactForm__input' 
                type="text" name='ContactForm-name' 
                placeholder='Name'/>

            <input 
                className='ContactForm__input last-input' 
                type="text" name='ContactForm-phone' 
                placeholder='Phone'/>
                
            <BlackBtn innerText={'Call me back'} styleBackground='ContactForm__btn'/>
        </form>
    );
};

export default ContactForm;