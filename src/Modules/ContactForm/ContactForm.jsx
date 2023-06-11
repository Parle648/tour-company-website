import React from 'react';
import './ContactForm.css'
import BlackBtn from '../../UI/BlackBtn/BlackBtn'

const ContactForm = props => {
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
                
            <BlackBtn innerText={'Call me back'} width='350'/>
        </form>
    );
};

export default ContactForm;