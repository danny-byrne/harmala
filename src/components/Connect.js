import React, { useState } from "react";
import emailjs from "emailjs-com";

/**
 * eventually implement OATH as described in https://medium.com/@nickroach_50526/sending-emails-with-node-js-using-smtp-gmail-and-oauth2-316fe9c790a1
 *
 * API from dev to prod : https://medium.com/the-andela-way/creating-a-react-redux-app-that-consumes-an-api-from-development-to-production-part-1-f03c5cc86ba
 *
 * .env on heroku https://stackoverflow.com/questions/49905070/how-to-add-env-file-or-otherwise-set-environment-variables-in-a-heroku-app
 */

export default function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [buttonText, setButtonText] = useState("Send");
  const { resetPage } = props;

  const resetForm = () => {
    setName("");
    setMessage("");
    setEmail("");
    setSubject("");
    setButtonText("Send");
  };

  async function formSubmit(e) {
    e.preventDefault(e);
    setButtonText("...sending");
    const data = {
      name,
      email,
      message,
      subject,
    };
    emailjs
      .send(
        "gmail",
        process.env.REACT_APP_TEMPLATE_ID,
        data,
        process.env.REACT_APP_USERID
      )
      .then(
        () => {
          resetForm();
          resetPage();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  const success = <h3>Contact Form Submitted!</h3>;
  const form = (
    <div>
      <form className="contact-form fade-in" onSubmit={(e) => formSubmit(e)}>
        <label className="label" htmlFor="name">
          Name
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          id="name"
          name="name"
          className="textinput"
          type="text"
          placeholder="Name"
          required
          value={name}
        />

        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="email"
          className="textinput"
          type="email"
          placeholder="your@email.com"
          required
          value={email}
        />

        <label className="label" htmlFor="subject">
          Enter Subject
        </label>
        <input
          onChange={(e) => setSubject(e.target.value)}
          id="subject"
          name="subject"
          className="textinput"
          type="text"
          placeholder="what would you like to talk about?"
          required
          value={subject}
        />

        <label className="label" htmlFor="message">
          Message
        </label>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          cols="60"
          rows="10"
          name="message"
          className="message"
          type="text"
          placeholder="Please write your message here"
          required
          value={message}
        />
        <div>
          <button type="submit" className="button">
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );

  const view = !sent ? form : success;

  return <div>{view}</div>;
}
