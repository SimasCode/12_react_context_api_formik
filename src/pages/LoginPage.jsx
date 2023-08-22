import styled from 'styled-components';
import Wrap from '../styled/Wrap.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';

const Title = styled.h1`
  font-size: 35px;
  font-weight: 500;
`;

const FormContainer = styled.form`
  max-width: 400px;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 0.3em 0.8em;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.$isError ? 'tomato' : '#777')};
  display: block;
  width: 300px;
  margin-bottom: 10px;
  width: 100%;
  background-color: ${(props) => (props.$isError ? '#ffd8d1' : 'trasparent')};
`;

const SubmitBnt = styled.button.attrs({
  type: 'submit',
})`
  background-color: #333;
  color: white;
`;

const ErrorMsg = styled.p`
  background-color: tomato;
  color: white;
  border-radius: 5px;
  padding: 0.2em 0.8em;
  font-size: 14px;
  margin-top: -5px;

  /* &:empty {
    display: none;
  } */
`;

export default function LoginPage() {
  const [loginSuccess, setLoginSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: 'emma.wong@reqres.in',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .trim()
        .matches(
          /^([a-ząčęėįšųūA-ZĄČĘĖĮŠŲŪ0-9._%-]+@[a-ząčęėįšųūA-ZĄČĘĖĮŠŲŪ0-9.-]+\.[a-zA-Z]{2,})$/,
          'Patikrinkite Emaila'
        )
        .min(3, 'Minimum 3 simboliai')
        .required('Privalomas laukas'),
      password: Yup.string()
        .trim()
        .min(4, 'Minimum 4 simboliai')
        .max(8)
        .required('Privalomas laukas'),
    }),
    onSubmit: (values) => {
      console.log('forma pateikta, duomenys:', values);
      handleLogin(values);
    },
  });

  function handleLogin(userCredentialsObj) {
    console.log('userCredentialsObj ===', userCredentialsObj);
    axios
      .post('https://reqres.in/api/login', userCredentialsObj)
      .then((ats) => {
        console.log('ats ===', ats);
        // jei gavom token tai pavyko prisiloginti
        // atspausdinti token
        console.log(ats.data.token);
        // naviguosim i home arba vip page
        if (ats.data.token) {
          console.log('pavyko login');
          setLoginSuccess(true);
        }
      })
      .catch((error) => {
        // prisiloginti nepavyko
        console.warn('ivyko klaida:', error);
        console.log('error.response.data.error ===', error.response.data.error);
        // formik.errors.email = error.response.data.error;
        // formik.setErrors({ email: error.response.data.error });
        formik.setErrors({ email: 'Email or password not found' });
      });
  }

  // console.log('formik.values ===', formik.values);
  // console.log('formik.errors ===', formik.errors);
  // console.log('formik.touched ===', formik.touched);
  return (
    <Wrap>
      <Title>Login here</Title>
      {loginSuccess && (
        <div>
          <h2>Sekmingai prisijungete kaip {formik.values.email}</h2>
        </div>
      )}
      {!loginSuccess && (
        <FormContainer onSubmit={formik.handleSubmit}>
          <Input
            $isError={formik.errors.email && formik.touched.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type='text'
            placeholder='Email'
            id='email'
          />
          {formik.errors.email && formik.touched.email && (
            <ErrorMsg>{formik.errors.email}</ErrorMsg>
          )}
          <Input
            isError={formik.errors.password && formik.touched.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            type='password'
            placeholder='Password'
            id='password'
          />
          {formik.errors.password && formik.touched.password && (
            <ErrorMsg>{formik.errors.password}</ErrorMsg>
          )}
          <SubmitBnt>Login</SubmitBnt>
        </FormContainer>
      )}
    </Wrap>
  );
}
