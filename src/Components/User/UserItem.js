import classes from "./UserItem.module.css";
function UserItem(props) {
  return props.dataList.map((item) => {
    return (
      <div className={classes.user}>
        {item.name} ({item.age} years old)
      </div>
    );
  });
}
export default UserItem;
