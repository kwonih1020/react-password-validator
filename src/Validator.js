import React, {Component} from 'react'
import "./Validator.css"

class Validator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      valid: true
    }
  }

  handleEmail (e) {
    this.setState({
      email: e.target.value
    })
  }

  handlePassword (e) {
    this.setState({
      password: e.target.value
    })
  }

  handleConfirm (e) {
    this.setState({
      passwordConfirm: e.target.value
    })
  }

  handleValidity (e) {
    e.preventDefault()
    this.checkValidate()
  }

  checkValidate () {
    if (this.state.password === this.state.passwordConfirm) {
        this.setState({ valid: true })
    } else {
      this.setState({ valid: false })
    }
  }

  render () {
    let validText = this.state.valid ? "Valid!" : "Passwords do not match"
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input onChange={(e) => this.handleEmail(e)} type="text" placeholder="email" />
        <input onChange={(e) => this.handlePassword(e)} type="password" placeholder="password" />
        <input onChange={(e) => this.handleConfirm(e)} type="password" placeholder="confirm password" />
        <input type="submit" onClick={(e) => this.handleValidity(e)} value="Submit" />
        <p>{validText}</p>
      </div>
    );
  }
}

export default Validator;
