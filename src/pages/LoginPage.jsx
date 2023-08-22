import styled from 'styled-components';
import Wrap from '../styled/Wrap.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Title = styled.h1`
  font-size: 35px;
  font-weight: 500;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 0.3em 0.8em;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.isError ? 'tomato' : '#777')};
  display: block;
  width: 300px;
  margin-bottom: 10px;
  width: 100%;
  background-color: ${(props) => (props.isError ? 'tomato' : 'transparent')};
`;
const SubmitBtn = styled.button.attrs({
  type: 'submit',
})`
  background-color: #333;
  color: white;
`;

const FormContainer = styled.form`
  max-width: 400px;
`;

const ErrorMsg = styled.p`
  background-color: tomato;
  color: white;
  border-radius: 5px;
  padding: 0.4em 0.8em;
  font-size: 14px;
  margin-top: -5px;

  /* &:empty {
    display: none;
  } */
`;

export default function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('forma pateikta, duomenys', values);
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .trim()
        .matches(
          /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
          'patikrinti simbolius'
        )
        .email('Patikrinkite email')
        .min(3, 'minimum 3 simboliai')
        .required('Required field'),
      password: Yup.string()
        .trim()
        .min(4, 'minimum 4 simboliai')
        .max(8)
        .required('Required field'),
    }),
  });

  console.log(' formik.values ===', formik.values);
  console.log('formik.errors', formik.errors);
  console.log('formik.touched', formik.touched);
  return (
    <Wrap>
      <Title>Login here</Title>
      <FormContainer onSubmit={formik.handleSubmit}>
        <Input
          isError={formik.errors.email && formik.touched.email}
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
        <SubmitBtn>Login</SubmitBtn>
      </FormContainer>
    </Wrap>
  );
}
