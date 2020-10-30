import React, { Component } from 'react';
import axios from 'axios';

export default class Edituser extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Firstname: '',
      Lastname: '',
      Address: '',
      Email: '',
      
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/app/users/')
      .then(response => {
        this.setState({
          Firstname: response.data.Firstname,
          Lastname: response.data.Lastname,
          Address: response.data.address,
          Email: response.data.email,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  }
 onChangeFirstname(e) {
    this.setState({
      Firstname: e.target.value
    })
  }

  onChangeLastname(e) {
    this.setState({
      Lastname: e.target.value
    })
  }

    onChangeAddress(e) {
    this.setState({
      Address: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      Email: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      Firstname: this.state.Firstname,
      Lastname: this.state.Lastname,
      address: this.state.Address,
      email: this.state.Email,
      
    }

    console.log(user);

    axios.post('http://localhost:5000/app/users/update/' + this.props.match.params.id, user)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit User</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Firstname: </label>
        <input type="text"
              required
              className="form-control"
              value={this.state.Firstname}
              onChange={this.onChangeFirstname}
              />    
        </div>
        <div className="form-group"> 
          <label>Lastname: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.Lastname}
              onChange={this.onChangeLastname}
              />
        </div>
        <div className="form-group">
          <label>Address: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.Address}
              onChange={this.onChangeAddress}
              />
        </div>
        <div className="form-group">
          <label>EMail: </label>
             <input 
              type="text" 
              className="form-control"
              value={this.state.Email}
              onChange={this.onChangeEmail}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}