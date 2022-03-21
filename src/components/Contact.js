import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/49f84c80-a670-11ec-975b-f9cc2b0e6900"

const Contact = () => {
    const [submitted, setSubmitted] = useState(false)

    const onSubmit = (evt) => {
        evt.preventDefault()
        setTimeout(() => {
            setSubmitted(true); 
        }, 100); 

    }; 

    if(submitted){
        return (
            <>
            <h4>Thank you!</h4>
            <div>I will contact you soon.</div>
            </>
        )
    } 

    return(
        <section id= 'contact'>
            
            <h2>contact me</h2>
           <form onSubmit = {onSubmit} method = "POST" target = "_blank" action = {FORM_ENDPOINT}>
               <div className = 'name'>
               <input 
               type = "text" 
               placeholder = "Name"
               name = "name"
                /> 
                </div>
                <div className = 'email'>
               <input 
               type = "email"
               placeholder = "Email"
               email = "email"

               /> 
               </div>

               <div >
               <input
               className = 'message'
               type = "text"
               placeholder = "Message me!"
               message = "message" 
               /> 
               </div>
               <button type = "submit"> Send </button>
           </form>

        </section>

        
    )
}

export default Contact