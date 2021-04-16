import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import schema from './constants.jsx';

const FlexDiv = styled.div`
  display: flex;
  margin: 0;
  height: 94vh;
  width: 100vw;
  justify-content: center;
  flex-wrap: wrap;
  overflow-x: hidden;
  background: whitesmoke;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const Circle = styled.div`
  position: absolute;
  left: 150px;
  top: 150px;
  background: ${schema.primary};
  margin: 0;
  width: 525px;
  height: 550px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 0 0 0 1.5vw;
  color: white;
  font-size: 6rem;
  font-weight: bold;
`;

const SmallCircle = styled.div`
  position: absolute;
  left: 450px;
  top: 400px;
  background: ${schema.secondary};
  margin: 0;
  width: 400px;
  height: 450px;
  border-radius: 50%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0 1.5vw;
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  text-align-last: right;
`;

const CircleHolder = styled.div`
  position: absolute;
  left: 445px;
  top: 675px;
  margin: 0;
  width: 459px;
  height: 175px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const ThirdCircle = styled.div`
  position: relative;
  background: #ffffff30;
  margin: 0;
  width: 450px;
  height: 450px;
  border-radius: 50%;
`;

const Corner = styled.div`
    width: 20vw;
    height: 40vh;
    overflow: hidden;
    position: absolute;
    top: 60vh;
    right: 0;

  &:before {
    content: "";
    display: block;
    width: 200%;
    height: 200%;
    position: absolute;
    border-radius: 50%;
    bottom: 0;
    right: 0;
    box-shadow: 20vh 10vw 0 0 ${schema.primary};
`;

const Form = styled.form`
  min-height: 45vh;
  min-width: 256px;
  max-width: 320px;
  margin: auto;
  padding: 36px;
  border-radius: 5px;
  position: relative;
  text-align: center;
  justify-content: space-around;
  background: rgba(255,255,255,0.95);
  box-shadow: 4px 12px 16px #6d6d6d;

  @media (min-width: 768px) {
    margin: auto 10vw auto 0;
  }
`;
const Input = styled.input`
  height: 36px;
  width: 90%;
  border: 1px solid grey;
  border-radius: 5px;
  background: whitesmoke;
`;
const Label = styled.label`
  float: left;
  margin: 18px 25px 4px 25px;
`;
const Button = styled.button`
  height: 40px;
  width: 55%;
  margin: 32px auto;
  border: 1px solid grey;
  border-radius: 25px;
  background: ${schema.secondary};
  color: white;
  font-size: 1.1rem;
  ${schema.hoverEffect}
`;
const BottomDiv = styled.div`
  position: absolute;
  bottom: 0;
  width: 80%;
  margin: auto auto 32px auto;
  text-align: center;
`;
const ToggleButtonDiv = styled.div`
  height: 6vh;
  width: 10vw;
  position: absolute;
  top: 0;
  right: 8vw;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Toggle = schema.searchButton;

const SEEKER_REGISTER_HEADER = 'Looking for a job? Sign up now!';
const EMPLOYER_REGISTER_HEADER = 'Looking for applicants? Sign up now!';
const SEEKER_LOGIN_HEADER = 'Sign in to get back to your search!';
const EMPLOYER_LOGIN_HEADER = 'Sign in to get access to your applicants!';
const REGISTER_BOTTOM_TEXT = 'Already a user? ';
const LOGIN_BOTTOM_TEXT = 'Don\'t have an account yet? ';

const FrontPage = ({
  setUserID, setAccountType, bubbleUpEmail, bubbleUpCompany,
}) => {
  const [user, setUser] = useState('Seeker');
  const [formType, setFormType] = useState('Login');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formToggle = () => {
    if (formType === 'Register') {
      setFormType('Login');
    } else {
      setFormType('Register');
    }
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'firstName':
        setFirstName(e.target.value);
        break;
      case 'lastName':
        setLastName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'company':
        setCompany(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO validate form data before post request

    if (formType === 'Register') {
      if (user === 'Seeker') {
        axios.post(`${schema.url}/users`, {
          firstName,
          lastName,
          email,
          password,
        })
          .then(({ data }) => {
            const { accessToken, _id } = data.data;
            setUserID(_id);
            setAccountType('User');
            bubbleUpEmail(email);
            // Do something with accessToken
            window.location.href = `${window.location.origin}/#/seeker`;
          });
      } else {
        axios.post(`${schema.url}/employers`, {
          company,
          firstName,
          lastName,
          email,
          password,
        })
          .then(({ data }) => {
            const { accessToken, _id } = data.data;
            setUserID(_id);
            setAccountType('Employer');
            bubbleUpEmail(email);
            bubbleUpCompany(company);
            // Do something with accessToken
            window.location.href = `${window.location.origin}/#/employer`;
          });
      }
    } else {
      axios.post(`${schema.url}/auth`, {
        email,
        password,
      })
        .then(({ data }) => {
          const { accessToken, _id, accountType } = data.data;
          setUserID(_id);
          setAccountType(accountType);
          bubbleUpEmail(email);
          // Do something with accessToken
          if (user === 'Seeker') {
            window.location.href = `${window.location.origin}/#/seeker`;
          } else {
            bubbleUpCompany(company);
            window.location.href = `${window.location.origin}/#/employer`;
          }
        });
    }
  };

  const handleUserToggle = (e) => {
    e.preventDefault();
    if (user === 'Seeker') {
      setUser('Employer');
    } else {
      setUser('Seeker');
    }
  };

  return (
    <FlexDiv>
      <ToggleButtonDiv>
        <Toggle onClick={handleUserToggle}>{`${user === 'Seeker' ? 'EMPLOYER' : 'SEEKER'} PORTAL`}</Toggle>
      </ToggleButtonDiv>
      <Circle>{`${schema.title}`}</Circle>
      <SmallCircle>
        Connecting People to Jobs
        And Jobs to People
      </SmallCircle>
      <CircleHolder>
        <ThirdCircle />
      </CircleHolder>
      <Corner />
      <Form>
        <h2>{`${user} Sign In`}</h2>
        {
          formType === 'Register' ? (
            <>
              {
              user === 'Seeker'
                ? <h4>{SEEKER_REGISTER_HEADER}</h4>
                : <h4>{EMPLOYER_REGISTER_HEADER}</h4>
            }
              {
              user === 'Employer' && (
                <>
                  <Label htmlFor="company">{'Company: '}</Label>
                  <Input type="text" id="company" onChange={handleChange} />
                </>
              )
          }
              <Label htmlFor="firstName">{'First Name: '}</Label>
              <Input type="text" id="firstName" onChange={handleChange} />
              <Label htmlFor="lastName">{'Last Name: '}</Label>
              <Input type="text" id="lastName" onChange={handleChange} />
            </>
          ) : (
            <>
              {
              user === 'Seeker'
                ? <h4>{SEEKER_LOGIN_HEADER}</h4>
                : <h4>{EMPLOYER_LOGIN_HEADER}</h4>
            }
            </>
          )
      }
        <Label htmlFor="email">{'Email: '}</Label>
        <Input type="email" id="email" onChange={handleChange} />
        <Label htmlFor="password">{'Password: '}</Label>
        <Input type="password" id="password" onChange={handleChange} />
        <Button onClick={handleSubmit}>SIGN IN</Button>
        {
          formType === 'Register'
            ? (
              <BottomDiv>
                {REGISTER_BOTTOM_TEXT}
                <a href="#app" onClick={formToggle}>Sign in</a>
              </BottomDiv>
            ) : (
              <BottomDiv>
                {LOGIN_BOTTOM_TEXT}
                <a href="#app" onClick={formToggle}>Register</a>
              </BottomDiv>
            )
        }
      </Form>
    </FlexDiv>
  );
};

export default FrontPage;
