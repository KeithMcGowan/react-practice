// React
// import { useState } from "react";
import { Component } from "react";

// Class Components
import User from "./User";

// Styles
import classes from "./Users.module.css";

// const DUMMY_USERS = [
//   { id: "u1", name: "Keith" },
//   { id: "u2", name: "Pascale" },
//   { id: "u3", name: "Avery" },
// ];

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      more: "Test",
    };
  }

  componentDidUpdate() {
    // try {
    //   someCodeWhichMightFail() {}
    // } catch (err) {
    //   handleError
    // }
    if (this.props.users.length === 0) {
      throw new Error("No users provided!");
    }
  }

  toggleUsersHandler() {
    // this.state.showUsers = false; //Do NOT Do!

    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {/* {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))} */}
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
