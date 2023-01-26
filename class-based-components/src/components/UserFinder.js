// React
// import { Fragment, useState, useEffect } from "react";
import { Fragment, Component } from "react";
import UsersContext from "../store/users-context";

// Class Components
import Users from "./Users";

// Styles
import classes from "./UserFinder.module.css";
import ErrorBoundary from "./ErrorBoundary";

// const DUMMY_USERS = [
//   { id: "u1", name: "Keith" },
//   { id: "u2", name: "Pascale" },
//   { id: "u3", name: "Avery" },
// ];

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      //   filteredUsers: DUMMY_USERS,
      // Importing users from database
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    // Send http request...
    // this.setState({ filteredUsers: DUMMY_USERS });
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
