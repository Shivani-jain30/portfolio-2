import React, { useState } from 'react'

const Contact = () => {
    const [msg, setMsg] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        setMsg("Sent Successfully");
    }
  return (
    <section id='contact'>
        <h2>Contact Me</h2>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Your Name' />

            <input type="Email" placeholder='Your Email....' />

            <input type="msg" placeholder='Your Message...' />

            <button type="submit">Send Msg</button>

        </form>

        <p>{msg}</p>
    </section>
  )
}

export default Contact