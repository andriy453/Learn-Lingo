import * as Yup from 'yup';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import {
  RegisterForm,
  Input,
  Button,

  Title,

 Text,
  Validation,
  InputValidation,

  ShowPassword,
 
 SvgEye,
  SvgX,

    ButtonCloseModal,
  
} from './RegisterForm.stuled';
import { redirect } from "react-router-dom";
import { useFormik } from 'formik';
import sprite from '../../../assets/sprite.svg'

 function Register({onClose}) {


  const validationSchema = Yup.object({
    userName: Yup.string()
      .min(2, 'Name must be at least 2 characters long')
      .max(16, 'Name can be at most 16 characters long')
      .matches(
        /^[a-zA-Z\s]+$/,
        'Name must contain only English letters and spaces',
      )
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .matches(
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        'Invalid Email format',
      )
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long')
      .max(16, 'Password can be at most 16 characters long')
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
        'Password must contain only English letters at least one digit, one lowercase letter, and one uppercase letter',
      )
      .required('Password is required'),
  });
const auth = getAuth();
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
      onSubmit: async (values) => {
          createUserWithEmailAndPassword(auth,  values.email,  values.password).then((userCredential) => {
              const user = userCredential.user;
              console.log(user)

  }).then(()=> redirect("/Teachers"))  .catch((error) => {
  console.log(error.code,error.message)  
  });
    
    },
  });
  {
    return (

          <RegisterForm onSubmit={formik.handleSubmit}>
            <Title>Registration</Title>
            <Text>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information</Text>
            <InputValidation>
              <Input
                id="userName"
                name="userName"
                type="text"
                placeholder="Name"
                onChange={formik.handleChange}
                value={formik.values.userName}
                className={`${
                  formik.touched.userName && formik.errors.userName
                    ? 'is-invalid'
                    : ''
                }`}
              />
              {formik.touched.userName && formik.errors.userName ? (
                <>
                  <Validation>{formik.errors.userName}</Validation>
                </>
              ) : null}
            </InputValidation>
            <InputValidation>
              <Input
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className={`${
                  formik.touched.email && formik.errors.email
                    ? 'is-invalid'
                    : ''
                }`}
                // isValidating={!formik.touched.email || !formik.errors.email}
              />

              {formik.touched.email && formik.errors.email ? (
                <>
                  <Validation>{formik.errors.email}</Validation>
                </>
              ) : null}
            </InputValidation>
            <InputValidation>
              <Input
                id="password"
                name="password"
                type={formik.values.showPassword ? 'text' : 'password'}
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className={`${
                  formik.touched.password && formik.errors.password
                    ? 'is-invalid'
                    : ''
                }`}
              />
              <ShowPassword
                type="button"
                onClick={() => {
                  formik.setFieldTouched('password', false);
                  formik.setFieldValue(
                    'showPassword',
                    !formik.values.showPassword,
                  );
                }}
              >
                {formik.values.showPassword ? (
                  <SvgEye>
                    <use href={sprite + '#iconEyeOpen'}></use>
                  </SvgEye>
                ) : (
                  <SvgEye>
                    <use href={sprite + '#iconEyeClosed'}></use>
                  </SvgEye>
                )}
              </ShowPassword>
              {formik.touched.password && formik.errors.password ? (
                <Validation>{formik.errors.password}</Validation>
              ) : null}
            </InputValidation>


            <Button type="submit">Sign Up</Button>
            
            <ButtonCloseModal onClick={()=>onClose(false)}><SvgX><use href={sprite + '#icon-x'}></use></SvgX></ButtonCloseModal>
          </RegisterForm>
    );
  }
 }

export default Register;