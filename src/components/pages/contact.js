import React, { useState } from "react";
// import the email validation checker
import { validateEmail } from "../../utils/validateText";

export default function Contact() {
    //Checking if the values entered on all the fields as useState
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // this event handler would store what is entered in the form
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    ////
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  ////
  const handleOnBlur = (e) => {
    // checks if the user clicks out of the form field
    if (e.currentTarget !== e.target) {
      // get the previous object that was clicked
      const inputType = e.target.name;
      const inputValue = e.target.value;


      if (inputType === "email" && !validateEmail(inputValue)) {
        setErrorMessage("Email is invalid");
        return;
      } else if (inputType === "name" && !inputValue.length) {
        setErrorMessage("Please enter a name");
        return;
      } else if (inputType === "message" && !inputValue.length) {
        setErrorMessage("Message is required");
        return;
      }
      // otherwise, set the error message to blank
      setErrorMessage("");
    }
  };

  // this event handler would perform checks after the user submits the form
  const handleFormSubmit = (e) => {
    // Preventing refreshing the page
    e.preventDefault();

    // check and validate all fields
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    if (name.length === 0) {
      setErrorMessage("Please enter a name");
      return;
    }
    if (message.length === 0) {
      setErrorMessage("Message is required");
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration. The saving of the details entered is not done.
    setName("");
    setMessage("");
    setEmail("");
    setErrorMessage("");
  };

  