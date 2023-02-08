// Using useState
import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);

    // if (e.target.value.trim() !== "") {
    //   setEnteredNameIsValid(true);
    // }
  };

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);

    // if (enteredName.trim() === "") {
    //   setEnteredNameIsValid(false);
    // }
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);

    // if (enteredName.trim() === "") {
    //   setEnteredNameIsValid(false);
    //   return;
    // }

    if (!enteredNameIsValid) {
      return;
    }

    // setEnteredNameIsValid(true);

    console.log(enteredName);

    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
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
