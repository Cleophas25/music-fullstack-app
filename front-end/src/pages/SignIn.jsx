import React, {useState, useEffect} from 'react';
import {FaGoogle} from 'react-icons/fa'
function SignIn() {

    const [loginUrl, setLoginUrl] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/auth", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((response) => {
            if (response.ok) {
              setLoading(false)
              return response.json();
            }
            throw new Error("Something went wrong!");
          })
          .then((data) => setLoginUrl(data.url))
          .catch((error) => console.error(error));
    }, []);

    if(loading) {
      return (
        <div className='flex items-center justify-center h-screen'>
        <div className='flex flex-col justify-center gap-2 items-center max-w-md border-t-4 border-black w-[90vw] bg-white rounded-md shadow-md py-8 px-10 my-12 mx-auto transition-all ease-in-out hover:shadow-lg'>
          <h3 className='text-center text-xl font-semibold font-primary'>
            Sign In with Google
          </h3>
          <button
            className='flex gap-2 items-center text-white bg-blue-500 p-1 rounded-md w-full capitalize my-6 text-center justify-center'
            
          >
            loading...
          </button>
        </div>
      </div>
      );
    }

    return (
      <div className='flex items-center justify-center h-screen'>
        {loginUrl != null && (
          <div className='flex flex-col gap-2 items-center justify-center max-w-md border-t-4 border-black w-[90vw] bg-white rounded-md shadow-md py-8 px-10 my-12 mx-auto transition-all ease-in-out hover:shadow-lg'>
            <h3 className='text-center text-xl font-semibold font-primary'>
              Sign In with Google
            </h3>
            <a
              className='flex gap-2 justify-center items-center text-white bg-blue-500 p-1 rounded-md w-full capitalize my-6 text-center'
              href={loginUrl}
            >
              <FaGoogle className='text-red-500'/>Sign In 
            </a>
          </div>
        )}
      </div>
    );
}

export default SignIn;