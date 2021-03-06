import React, { useRef, useState } from 'react';

import { Form, Button, Card, Alert } from 'react-bootstrap';

import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

const RegisterPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { register } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await register(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      history.push('/it-nder');
    } catch {
      setError('Failed to create an account');
      setLoading(false);
    }
  };

  return (
    <Card>
      <Card.Body>
        <h2 className='text-center mb-4'>Sing Up</h2>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' ref={emailRef} required />
          </Form.Group>
          <Form.Group id='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' ref={passwordRef} required />
          </Form.Group>
          <Form.Group id='password-confirm'>
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type='password' ref={passwordConfirmRef} required />
          </Form.Group>
          <Button disabled={loading} className='w-100' type='submit'>
            Sign Up
          </Button>
        </Form>
      </Card.Body>
      <Card.Footer>
        Already have an account? <Link to='/login'>Log In</Link>
      </Card.Footer>
    </Card>
  );
};

export default RegisterPage;
