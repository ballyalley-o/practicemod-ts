import { Component } from 'react';


interface User {
    name: string;
    age: number;
}

interface UserSearchProps {
    users: User[]
}

interface UserSearchState {
    name: string;
    user : User| undefined;
}

export default class UserSearchClass extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  onClick = () => {
    const searchUser = this.props.users.find((user) => {
      //search .slice(0, name.length) to see if it matches
      //if it does, return the user
      //toUpperCase() to make it case insensitive
      if (user.name.slice(0, this.state.name.length).toLowerCase() === this.state.name) {
        return this.state.name;
      } else {
        return undefined;
      }
    });

    this.setState({user: searchUser});
  };

  render() {
    const { user, name } = this.state;

    return (
      <div className="container">
        <h3>USER SEARCH</h3>
        <input
          value={name}
          className="u-full-width"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick} className="u-full-width">
          Search Users
        </button>
        <div className="name">{user && user.name}</div>
        <div className="age">{user && user.age}</div>
      </div>
    );
  }
}


