// Using useState
// import { useState } from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  // const [enteredName, setEnteredName] = useState("");
  // // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // const enteredNameIsValid = enteredName.trim() !== "";
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  // const enteredEmailIsValid = enteredEmail.trim() !== "" && enteredEmail.includes("@");
  // const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // const nameInputChangeHandler = (e) => {
  //   setEnteredName(e.target.value);

  //   // if (e.target.value.trim() !== "") {
  //   //   setEnteredNameIsValid(true);
  //   // }
  // };

  // const emailInputChangeHandler = (e) => {
  //   setEnteredEmail(e.target.value);
  // };

  // const nameInputBlurHandler = (e) => {
  //   setEnteredNameTouched(true);

  //   // if (enteredName.trim() === "") {
  //   //   setEnteredNameIsValid(false);
  //   // }
  // };

  // const emailInputBlurHandler = (e) => {
  //   setEnteredEmailTouched(true);
  // };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    // setEnteredNameTouched(true);
    // setEnteredEmailTouched(true);

    // if (enteredName.trim() === "") {
    //   setEnteredNameIsValid(false);
    //   return;
    // }

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    // setEnteredNameIsValid(true);

    console.log(enteredName);

    // setEnteredName("");
    // setEnteredNameTouched(false);
    // setEnteredEmail("");
    // setEnteredEmailTouched(false);

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          placeholder="example@email.com"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">
            Email cannot be empty and must contain "@".
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

// Using useRef
// import { useRef } from "react";

// const SimpleInput = (props) => {
//   const nameInputRef = useRef();

//   const formSubmissionHandler = (e) => {
//     e.preventDefault();

//     const enteredValue = nameInputRef.current.value;
//     console.log(enteredValue);

//     e.target.reset();
//   };

//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className="form-control">
//         <label htmlFor="name">Your Name</label>
//         <input
//           ref={nameInputRef}
//           type="text"
//           id="name"
//         />
//       </div>
//       <div className="form-actions">
//         <button>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;
