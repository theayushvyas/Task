import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Mailto from 'react-protected-mailto'

const User = props => (
  <tr>
    <td>{props.user.Firstname}</td>
    <td>{props.user.Lastname}</td>
    <td>{props.user.address}</td>
    <td> <Mailto email={props.user.email}>{props.user.email} </Mailto></td>
    <td>
      <a href={"/edit/"+props.user._id}>edit</a> | <a href="#" onClick={() => { props.deleteuser(props.user._id) }}>delete</a>
    </td>
  </tr>
)

export default class userlist extends Component {
  constructor(props) {
    super(props);

    this.deleteuser = this.deleteuser.bind(this)

    this.state = {user: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/app/users')
      .then(response => {
        this.setState({ user: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteuser(id) {
    axios.delete('http://localhost:5000/app/users/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      user: this.state.user.filter(el => el._id !== id)
    })
  }

  userList() {
    return this.state.user.map(currentuser => {
      return <User user={currentuser} deleteuser={this.deleteuser} key={currentuser._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged user</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Address</th>
              <th>E-Mail</th>
            </tr>
          </thead>
          <tbody>
            { this.userList() }
          </tbody>
        </table>
      </div>
    )
  }
}