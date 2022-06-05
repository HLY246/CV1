import React from "react";

class Content extends React.Component {
    render() {
        return <div id="contact">
            <h2>Contact</h2>
            <p>For any inquires please leave me a message below.</p>
            <form method="POST" action="https://formsubmit.co/pete.holyland@gmail.com">
                <input classname="input" type="text" name="name" placeholder="Name" required></input>
                <br />
                <input classname="input" type="text" name="email" placeholder="Email" required></input>
                <br />
                <textarea classname="input" id="message" type="text" name="message" placeholder="Message" required></textarea>
                <br />
                <button id="submit" type="submit">Send Message</button>
            </form>
        </div>
    }
}

export default Content;