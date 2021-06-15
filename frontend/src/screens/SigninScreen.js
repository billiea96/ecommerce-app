import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { sigin } from '../actions/userActions';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';

export default function SigninScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const search = props.location.search; // could be '?foo=bar'
  const params = new URLSearchParams(search);
  const redirect = params.get('redirect') ? params.get('redirect') : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(sigin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        { loading && <LoadingBox></LoadingBox>}
        { error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Enter Email" 
            required 
            onChange={ e => setEmail(e.target.value) }
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Enter password" 
            required 
            onChange={ e => setPassword(e.target.value) }
          ></input>
        </div>
        <div>
          <label/>
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label/>
          <div>
            New Customer? {' '}
            <Link to="/register">Create your account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}