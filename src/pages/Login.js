import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardLink,
  Button,
  Form,
  FormGroup,
  Input,
} from 'reactstrap';

import { register, login, ping } from '../actions';

const LoginPage = (props) => {
  const [registerState, setRegisterState] = useState(false);
  const [emailString, setEmailString] = useState('');
  const [passwordString, setPasswordString] = useState('');
  const [confirmString, setConfirmString] = useState('');

  const toggleRegisterState = () => setRegisterState(!registerState);

  const handleSubmit = () => {
    if (registerState) register(emailString, passwordString, props.history);
    else login(emailString, passwordString, props.history);
  };

  useEffect(() => {
    ping();
  }, []);

  return (
    <Container className='mt-5'>
      <Row className='mt-5'>
        <Col>
          <Card className='px-5 mt-5'>
            <CardBody>
              <CardTitle>Welcome!</CardTitle>
              <Form>
                <FormGroup>
                  <Input
                    type='email'
                    name='email'
                    id='email'
                    value={emailString}
                    onChange={(e) => setEmailString(e.target.value)}
                    placeholder='Email'
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type='password'
                    name='password'
                    id='password'
                    value={passwordString}
                    onChange={(e) => setPasswordString(e.target.value)}
                    placeholder='Password'
                  />
                </FormGroup>
                {registerState && (
                  <FormGroup>
                    <Input
                      type='password'
                      name='confirm'
                      id='confirm'
                      value={confirmString}
                      onChange={(e) => setConfirmString(e.target.value)}
                      placeholder='Confirm Password'
                    />
                  </FormGroup>
                )}
                <FormGroup>
                  <Button onClick={handleSubmit}>
                    {registerState ? 'Register' : 'Log In'}
                  </Button>
                  <Button
                    className='ml-3'
                    onClick={() => login('test', 'test', props.history)}
                  >
                    Example User
                  </Button>
                </FormGroup>
                {registerState ? (
                  <FormGroup>
                    Already have an account?{' '}
                    <CardLink
                      style={{ cursor: 'pointer' }}
                      onClick={toggleRegisterState}
                    >
                      Login
                    </CardLink>
                  </FormGroup>
                ) : (
                  <FormGroup>
                    Dont have an account?{' '}
                    <CardLink
                      style={{ cursor: 'pointer' }}
                      onClick={toggleRegisterState}
                    >
                      Register
                    </CardLink>
                  </FormGroup>
                )}
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
