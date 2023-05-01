import { useState } from "react";
import Users from "./Components/User/Users";
import NewUsers from "./Components/NewUser/NewUsers";
import classes from "./App.module.css";
function App() {
  const INITIAL_USERDATA = [
    {
      name: "Leeroy",
      age: 50,
    },
    {
      name: "Jenkins",
      age: 40,
    },
  ];
  const [userData, setUserData] = useState(INITIAL_USERDATA);
  const addUserDataHandler = (newUserData) => {
    setUserData((prevUserData) => {
      return [newUserData, ...prevUserData];
    });
  };
  return (
    <div className={classes}>
      <NewUsers onAddUserData={addUserDataHandler} />
      <Users dataList={userData} />
    </div>
  );
}

export default App;
