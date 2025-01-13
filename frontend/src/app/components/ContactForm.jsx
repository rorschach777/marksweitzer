"use client";

import {Button} from "@nextui-org/button";
import {useReducer, useRef, useEffect, useState } from "react";
import {formReducer, formInitialState} from '../reducers/form-reducer';

const ContactForm = ( props ) => {

    const [formCompleted, setFormCompleted] = useState(false);
    const [sent, setSent] = useState(false);

    const firstNameRef = useRef("");
    const lastNameRef = useRef("");
    const emailRef = useRef("");
    const messageRef = useRef("");

    const data = {
        firstName:  firstNameRef, 
        lastName: lastNameRef,
        email: emailRef,
        message: messageRef,
    }

  
    const [formState, formDispatch] = useReducer(formReducer, formInitialState);

    const firstNameValidation = () => {
        const pattern = /^[A-Za-z]{1,12}$/;    
        const isValid = pattern.test(firstNameRef.current.value);
        formDispatch({type: "UPDATE_FIRST_NAME", payload: {isValid : isValid, isUpdated : true}})
    }

    const lastNameValidation = () => {
        const pattern = /^[A-Za-z]{1,15}$/;    
        const isValid = pattern.test(lastNameRef.current.value);
        formDispatch({type: "UPDATE_LAST_NAME", payload: {isValid : isValid, isUpdated : true}})
        
    }

    const emailValidation = () => {
        const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;    
        const isValid = pattern.test(emailRef.current.value);
        formDispatch({type:  "UPDATE_EMAIL" , payload: {isValid : isValid, isUpdated : true}})
        
    }

    const send = async () => {
    
        try {
            const options = {
                method : 'POST',
                body : JSON.stringify(data),
                headers: {
                    "Content-Type" : "application/json0"
                }
            };
            // const response = await fetch('/api/send', options);
            const response = await fetch('/api/send', options);
            if(response.ok){
                setSent(true);
            }
        }
        catch(err){
            console.log(err)
            console.log(err.message)
        }
        finally {
            console.log('sent message')
            setFormCompleted(true)
        }
    }
   
    const sendHandler = (e) => {
        console.log('form')
        e.preventDefault();
        send();
    }
   
    useEffect(()=>{},[formCompleted])

    return(
        <form className={`contact-form ${props.hidden}`}>
   
            <div className="form-group">
                <label>First Name</label>
                <input type="text" ref={firstNameRef} onBlur={firstNameValidation}/> 
                {formState.firstName.isUpdated && !formState.firstName.isValid && (
                    <span className="validation-message">Your Wrong</span>
                )}
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input type="text" ref={lastNameRef} onBlur={lastNameValidation}/> 
                {formState.lastName.isUpdated && !formState.lastName.isValid && (
                    <span className="validation-message">Your Wrong</span>
                )}
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input type="text" ref={emailRef}  onBlur={emailValidation}/> 
                {formState.email.isUpdated && !formState.email.isValid && (
                    <span className="validation-message">Your Wrong</span>
                )}
            </div>
            <div className="form-group">
                <label>Message</label>
                <textarea  ref={messageRef }/>
            </div>
            <div className="form-group">
                <Button variant="bordered" onClick={(e)=> sendHandler(e)}>
                    Send
                </Button>
            </div>
        
            {formCompleted && (
                <div className={`user-feedback ${sent === true ? 'sent-message' : 'failure-message'}`}>
                    <span className="">
                        {sent === true && ('Thank you for reaching out and will get back to you as soon as possible.')}
                        {sent === false && ('Oops it looks like something went wrong. Please try again.')}
                    </span>
                </div>
            )}
        </form>
    );
}
export default ContactForm;