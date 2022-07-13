// /* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import './Contact.css';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const submit = (evt) => {
        evt.preventDefault();
        setSubmitted(true);
        if (name !== "" && email
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ) && message !== "") {
            window.location.reload();
        }
    }
    return (
        <div className="contact">
            <h2>CONTACT US</h2>
            <form onSubmit={submit} method="post">
                <div className={submitted && name === "" ? 'error' : ''}>
                    <label for="name">Name</label><br />
                    <input type="text" name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    /><br />
                    <div className="message">This field is required.</div>
                </div>
                <div className={submitted && !email
                    .toLowerCase()
                    .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    ) ? 'error' : ''}>
                    <label for="email">Email</label><br />
                    <input type="email" name="email" className={submitted && email === "" ? 'error' : ''}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    /><br />
                    <div className="message">Invalid email address.</div>
                    <label for="message">Message</label><br />
                </div>
                <div className={submitted && message === "" ? 'error' : ''}>
                    <textarea
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        rows={4}
                    />
                    <div className="message">This field is required.</div>
                </div>
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    );
}

export default Contact;
