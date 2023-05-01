import { useState } from "react";
import classes from "./NewUserForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function NewUserForm(props) {
  const [enteredName, setNameValue] = useState("");
  const [enteredAge, setAgeValue] = useState("");
  const [errorModalStatus, setErrorModalStatus] = useState(false);
  const [error, setError] = useState({ title: "", message: "" });

  const changeNameHandler = (event) => {
    setNameValue(event.target.value);
  };
  const changeAgeHandler = (event) => {
    setAgeValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Name or age can't be empty",
      });
      setNameValue("");
      setAgeValue("");
      setErrorModalStatus(true);

      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age input",
        message: "Age can't be less than 0",
      });
      setErrorModalStatus(true);
      setNameValue("");
      setAgeValue("");
      return;
    }
    if (+enteredAge > 122) {
      setError({
        title: "Invalid age input",
        message:
          "The oldest person in the world was 122 years old, who are you?",
      });
      setErrorModalStatus(true);
      setNameValue("");
      setAgeValue("");
      return;
    }
    const newUserData = { name: enteredName, age: enteredAge };
    setNameValue("");
    setAgeValue("");
    props.onSaveUserData(newUserData);
  };
  const closeErrorModalHandler = () => {
    setErrorModalStatus(false);
  };
  return (
    <div>
      {errorModalStatus && (
        <ErrorModal
          closeErrorModal={closeErrorModalHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="name">UserName</label>
            <input
              className={classes}
              id="name"
              type="text"
              name="name"
              value={enteredName}
              onChange={changeNameHandler}
            ></input>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              name="age"
              value={enteredAge}
              onChange={changeAgeHandler}
            ></input>
            <Button type="submit">Add new User</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
export default NewUserForm;
