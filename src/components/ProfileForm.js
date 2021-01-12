import React from 'react'
import { connect } from 'react-redux'
import {Button, Form, Row, Col} from 'react-bootstrap'
import {  handleLoginFormChange, sendUpdateProfile } from '../actions/userActions'

const ProfileForm = (props) => {
  const { form, handleLoginFormChange, sendUpdateProfile, user_id  } = props
  const { email, firstName, lastName, password, passwordConfirmation, pointWallet, profileImgUrl, username } = form
    const originalPassword = password


  const handleSubmit = (e) => {
    e.preventDefault()
      if (password === originalPassword){
        // sendUpdateProfile([{email: email, password: password, username: username, profile_img_url: profileImgUrl, first_name: firstName, last_name: lastName, point_wallet: pointWallet}, user_id])
        sendUpdateProfile([{email: email, profile_img_url: profileImgUrl, first_name: firstName, last_name: lastName}, user_id])
      } else {
        alert("Invalid Password")
      }
  }

  return(
      
    <> 
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Group controlId="formFirstName" className="mx-sm-3 mb-2">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="test" name="firstName" onChange={handleLoginFormChange} value={firstName} placeholder="First Name"></Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formLastName" className="mx-sm-3 mb-2">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastName" onChange={handleLoginFormChange} value={lastName} placeholder="Last Name"></Form.Control>
                  </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Group controlId="formProfileImgUrl" className="mx-sm-3 mb-2">
                        <Form.Label>Profile Image URL</Form.Label>
                        <Form.Control type="test" name="profileImgUrl" onChange={handleLoginFormChange} value={profileImgUrl} placeholder="Profile Image URL"></Form.Control>
                    </Form.Group>
                    </Col>
                </Row>
                  <Form.Group controlId="formPassword" className="mx-sm-5 mb-2">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" name="password" onChange={handleLoginFormChange} value={password} placeholder="password"></Form.Control>
                  </Form.Group>
                  <Button variant="secondary" type="submit" id="form-button">Update Profile</Button> 
                </Form>
                <br/>
        </>
  )
}

// remove dependence on form, use user state info
const mapStateToProps = (state) => ({
  form: state.users.loginForm,
  user_id: state.users.id
})

export default connect(mapStateToProps, {  handleLoginFormChange, sendUpdateProfile })(ProfileForm)