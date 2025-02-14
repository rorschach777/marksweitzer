"use client";

import {Button} from "@nextui-org/button";
import {useReducer, useRef, useEffect, useState } from "react";
import {formReducer, formInitialState} from '../reducers/form-reducer';

const ContactForm = ( props ) => {

    const [formCompleted, setFormCompleted] = useState(false);
    const [formState, formDispatch] = useReducer(formReducer, formInitialState);
    const [sent, setSent] = useState(false);

    const firstNameRef = useRef("");
    const lastNameRef = useRef("");
    const emailRef = useRef("");
    const messageRef = useRef("");

 
    const formIsValid = () => {
        const runChecks = () => {
            let validKeys = 0;
            let validFields = 0;
            for(var key in formState){
                if (formState[key].isValid !== undefined){
                    validKeys += 1
                    if(formState[key].isValid){
                        validFields += 1;
                    };
                }
            }
            return validKeys === validFields ? true : false;
        }
        const allFieldsValid = runChecks();
        formDispatch({type : "UPDATE_FORM_VALIDITY", payload : {value: allFieldsValid}})
    }
    useEffect(()=>{
        formIsValid();
    }, [
        formState.firstName, 
        formState.lastName,
        formState.email, 
        formState.formIsValid
    ]);
    const firstNameValidation = () => {
 
        const pattern = /^[A-Za-z]{1,12}$/;    
        const isValid = pattern.test(firstNameRef.current.value);
        formDispatch({type: "UPDATE_FIRST_NAME", payload: {isValid : isValid, isUpdated : true, value: firstNameRef.current.value}});

    }

    const lastNameValidation = () => {

 
        const pattern = /^[A-Za-z]{1,15}$/;    
        const isValid = pattern.test(lastNameRef.current.value);
        formDispatch({type: "UPDATE_LAST_NAME", payload: {isValid : isValid, isUpdated : true, value: lastNameRef.current.value}})

    }

    const emailValidation = () => {
     
        const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;    
        const isValid = pattern.test(emailRef.current.value);
        formDispatch({type:  "UPDATE_EMAIL" , payload: {isValid : isValid, isUpdated : true, value: emailRef.current.value}});

        
    }

    const messageValidation = () => {
        formDispatch({type:  "UPDATE_MESSAGE" , payload: { isUpdated : true, value: messageRef.current.value}});
        
    }

    const send = async () => {
        const body = {
            firstName: formState.firstName.value,
            lastName: formState.lastName.value,
            email: formState.email.value,
            message: formState.message.value,
        }
        
        try {
            const options = {
                method : 'POST',
                body : JSON.stringify(body),
                headers: {
                    "Content-Type" : "application/json0"
                }
            };
            // const response = await fetch('/api/send', options);
            console.log(options.body)
            const response = await fetch('/api/send', options);
            console.log(response)
            if(response.ok){
                setSent(true);
            }
        }
        catch(err){
            console.log(err)
            console.log(err.message)
        }
        finally {
            console.log('Finally: Sent')
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
            {formState && (
                <>
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
            <div className="form-group" onChange={messageValidation}>
                <label>Message</label>
                <textarea  ref={messageRef }/>
            </div>
            <div className="form-group">
                {formState.formIsValid && (
                    <Button variant="bordered" onClick={(e)=> sendHandler(e)} >
                        Send
                    </Button>
                )}
            
            </div>
                </>
            )}
            
        
            { formCompleted && (
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