import React from 'react'
import { connect } from 'react-redux'
import {Button, Form, Row, Col} from 'react-bootstrap'
import { toggleSignup, handleLoginFormChange, sendSignup, sendLogin } from '../actions/userActions'

const Login = (props) => {
  const { signup, toggleSignup, form, handleLoginFormChange, sendSignup, sendLogin } = props
  const { email, username, password, passwordConfirmation, firstName, lastName, profileImgUrl, pointWallet } = form

  const handleSubmit = (e) => {
    e.preventDefault()
    if (signup){
      if (password === passwordConfirmation){
        sendSignup({email: email, password: password, username: username, profile_img_url: profileImgUrl, first_name: firstName, last_name: lastName, point_wallet: pointWallet})
      } else {
        alert("Those passwords don't match!")
      }
    } else {
      sendLogin({email: email, password: password})
    }
  }

  return(
    <>
      {signup ?
      <>
      <div className="home-section">
        <br/>
        <div className="circle-overlay-signup">
            <h1 id="form-title">Empowerment Signup</h1>  
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Group controlId="formFirstName" className="mx-sm-3 mb-2">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="rName" name="firstName" onChange={handleLoginFormChange} value={firstName} placeholder="First Name"></Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formLastName" className="mx-sm-3 mb-2">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="lastName" name="lastName" onChange={handleLoginFormChange} value={lastName} placeholder="Last Name"></Form.Control>
                  </Form.Group>
                    </Col>
                </Row>
                <Row>
                <Col>
                  <Form.Group controlId="formEmail" className="mx-sm-4 mb-1">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" name="email" onChange={handleLoginFormChange} value={email} placeholder="example@email.com"></Form.Control>
                      <Form.Text >We'll never share your email address</Form.Text>
                  </Form.Group>
                </Col>
                </Row>
                  <Form.Group controlId="formPassword" className="mx-sm-5 mb-2">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" name="password" onChange={handleLoginFormChange} value={password} placeholder="password"></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formPasswordConfirmation" className="mx-sm-5 mb-2">
                      <Form.Label>Password Confirmation</Form.Label>
                      <Form.Control type="password" name="passwordConfirmation" onChange={handleLoginFormChange} value={passwordConfirmation} placeholder="Confirm your password"></Form.Control>
                  </Form.Group>
                  <Button variant="secondary" type="submit" id="form-button">Signup</Button> 
                </Form>
                <br/>
                Already have an account? 
                <Button onClick={toggleSignup} id="form-toggle">Login</Button>
            </div>
            </div>

      </>
      : 
      <>
      <div className="home-section">
        <div className="circle-overlay">
        <h1 id="form-title">Empowerment Login</h1>
           <Form onSubmit={handleSubmit}>

           <Form.Group controlId="formEmail" className="mx-sm-5 mb-2">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" name="email" onChange={handleLoginFormChange} value={email} placeholder="example@email.com"></Form.Control>
            <Form.Text >We'll never share your email address</Form.Text>
           </Form.Group>

          <Form.Group controlId="formPassword" className="mx-sm-4 mb-2">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" onChange={handleLoginFormChange} value={password} placeholder="password"></Form.Control>
          </Form.Group>

          <Button variant="secondary" type="submit" id="form-button">Login</Button> 
          </Form>
             <br/>
            No Account? 
          <Button onClick={toggleSignup} id="form-toggle">Sign Up</Button>  
            </div>   
        </div>
      </>

      } 
      
    </>
  )
}

const mapStateToProps = (state) => ({
  signup: state.users.signup,
  form: state.users.loginForm
})

export default connect(mapStateToProps, { toggleSignup, handleLoginFormChange, sendSignup, sendLogin })(Login)