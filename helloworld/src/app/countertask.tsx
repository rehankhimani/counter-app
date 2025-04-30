"use client";
import { useState } from "react";

type CounterType = {
  message: string;
  count: number;
};

type ErrorType = {
  type: "error" | "warning";
  errorMsg: string;
};

export default function Counter({ message, count }: CounterType) {
  const [userName, setUserName] = useState("");
  const [initCount, setInitCount] = useState(count);
  const [countInput, setCountInput] = useState("");
  const [error, setError] = useState<ErrorType>({
    type: "error",
    errorMsg: "You are not listed in our system.",
  });

  const addHandler = () => {
    const num = parseInt(countInput);
    if (!isNaN(num)){
    setInitCount(initCount + num); // Increment count by 1


    }
  };
  const subhandler = (event : any) =>{
    const num = parseInt(countInput)
    if (!isNaN(num)){
        setInitCount(initCount - num );
    }
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
   const countInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountInput(event.target.value); // Update the input field value state
  };

  const toggleErrorHandler = () => {
    if (error.type === "error") {
      setError({
        type: "warning",
        errorMsg: "please wear your id card",
      });
    } else {
      setError({
        type: "error",
        errorMsg: "You are not listed in our system.",
      });
    }
  };

  return (
    <>
      <h1>
        {userName} {initCount}
      </h1>
      userName:
      <input
        type="text"
        value={userName}
        onChange={changeHandler}
      />
      {userName.length >= 3 ? (
        <h2>Welcome {userName}</h2>
      ) : (
        <h2>Please enter your name</h2>
      )}
      <p
        style={
          error.type === "error"
            ? { backgroundColor: "red", color: "white" }
            : { backgroundColor: "yellow", color: "red" }
        }
      >
        {error.errorMsg}
      </p>
      <button onClick={toggleErrorHandler}>Toggle Error</button>
      <h3>{initCount}</h3>
      <input
        type="number"
        value={countInput}
        onChange={countInputChangeHandler} // Handle input change for count input field
        placeholder="Enter a number"
      />
      <button onClick={addHandler}>Add</button>
      <button onClick={subhandler}>Subtract</button>
    </>
  );
}
