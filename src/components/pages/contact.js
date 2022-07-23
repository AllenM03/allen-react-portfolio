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