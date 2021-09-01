import React, { Component } from "react";
import "./assets/css/custom.css";

export default class UsersList extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  }

  render() {
    return (
      <>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <td>id</td>
            <td>name</td>
            <td>email</td>
            <td>username</td>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <Users key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
class Users extends Component {
  render() {
    const { user } = this.props;

    return (
      <>
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.username}</td>
        </tr>
      </>
    );
  }
}
