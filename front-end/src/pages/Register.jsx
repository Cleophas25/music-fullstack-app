import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FormRow from "../components/FornRow";

const values = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const navigate = useNavigate();
  // const { search } = useLocation()
  // const redirectInUrl = new URLSearchParams(search).get('redirect')
  // const redirect = redirectInUrl ? redirectInUrl : '/'

  return (
    <section className='min-h-screen grid items-center relative'>
      <form
        className='max-w-md border-t-4 border-black w-[90vw] bg-white rounded-md shadow-md py-8 px-10 my-12 mx-auto transition-all ease-in-out hover:shadow-lg'
      >
        <h3 className='text-center text-3xl font-semibold font-primary'>
          Register
        </h3>
        {/* name input */}
        {!values.isMember && (
          <FormRow
            placeholder='Your Email'
            type='text'
            name='name'
            value={values.name}
          />
        )}

        {/* email input */}
        <FormRow
          placeholder='Your Email'
          type='email'
          name='email'
          value={values.email}
        />
        {/* password input */}
        <FormRow
          placeholder='Enter your password'
          type='password'
          name='password'
          value={values.password}
        />
          <button
            type='submit'
            className='cursor-pointer text-white bg-black border-transparent rounded-md tracking-wider py-1 p-3 shadow-sm transition-all ease-in-out capitalize inline-block w-full hover:bg-gray-900 hover:shadow-lg'
            disabled={false}
          >
            submit
          </button>
        <button
          type='button'
          className='mt-4 w-full bg-gray-200 p-1 rounded-md capitalize'
          disabled={false}
        >
          loading
        </button>
        <p className='m-0 mt-4 text-center'>
          Not a member yet?
          <button
            type='button'
            className='bg-transparent border-transparent text-orange-500 cursor-pointer ml-1 font-semibold'
          >
            Register
          </button>
        </p>
      </form>
    </section>
  );
};
export default Register;
