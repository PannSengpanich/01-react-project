import UserList from "./UserList";
import Card from "../UI/Card";
import classes from "./Users.module.css";
function Users(props) {
  return (
    <Card className={classes.users}>
      <UserList dataList={props.dataList}></UserList>
    </Card>
  );
}
export default Users;
