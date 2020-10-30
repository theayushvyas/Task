import React, { Component } from 'react';
import axios from 'axios';

export default class Createuser extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      FirstName: '',
      LastName: '',
      Address: '',
      EMail: '',
      count:'',
      
    }
  }


  onChangeFirstName(e) {
    this.setState({
      FirstName: e.target.value
    })
  }

  onChangeLastName(e) {
    this.setState({
      LastName: e.target.value
    })
  }

    onChangeAddress(e) {
    this.setState({
      Address: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      EMail: e.target.value
    })
  }

  onClick(e){
    this.setState({
      count: this.state.count +1
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const user = {
      Firstname: this.state.FirstName,
      Lastname: this.state.LastName,
      address: this.state.Address,
      email: this.state.EMail,
      
    }

    console.log(user);

    axios.post('http://localhost:5000/app/users', user)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
           <label>FirstName: </label>
        <input type="text"
              required
              className="form-control"
              value={this.state.FirstName}
              onChange={this.onChangeFirstName}
              />  
        </div>
        <div className="form-group"> 
          <label>LastName: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.LastName}
              onChange={this.onChangeLastName}
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
          <label>E-Mail</label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.EMail}
              onChange={this.onChangeEmail}
              />

        
        </div>

        <div className="form-group">
          <input type="submit" value="submit" className="btn btn-primary" onClick={this.onClick} />
        </div>
      </form>
    </div>
    )
  }
}