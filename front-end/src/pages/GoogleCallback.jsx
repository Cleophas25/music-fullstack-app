import React, {useState, useEffect} from 'react';
import { useLocation, Link } from "react-router-dom";

function GoogleCallback() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [user, setUser] = useState(null);
    const location = useLocation();

    // On page load, we take "search" parameters
    // and proxy them to /api/auth/callback on our Laravel API
    useEffect(() => {

        fetch(
          `http://127.0.0.1:8000/api/auth/callback${location.search}`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setLoading(false);
            setData(data);
          });
    }, []);

    // Helper method to fetch User data for authenticated user
    // Watch out for "Authorization" header that is added to this call
    function fetchUserData() {
        fetch(`http://127.0.0.1:8000/api/user`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + data.access_token,
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setUser(data);
          });
    }

    if (loading) {
        return (
          <div className='flex items-center justify-center h-screen'>
            <div className='flex flex-col justify-center gap-2 items-center max-w-md border-t-4 border-black w-[90vw] bg-white rounded-md shadow-md py-8 px-10 my-12 mx-auto transition-all ease-in-out hover:shadow-lg'>
              <h3 className='text-center text-xl font-semibold font-primary'>
                Sign In with Google
              </h3>
              <button className='flex gap-2 items-center text-white bg-blue-500 p-1 rounded-md w-full capitalize my-6 text-center justify-center'>
                loading...
              </button>
            </div>
          </div>
        );
    } else {
        if (user != null) {
            return <DisplayData data={user}/>
        } else {
            return (
              <div className='flex items-center justify-center h-screen'>
                <div className='flex flex-col justify-center gap-4 items-center max-w-md border-t-4 border-black w-[90vw] bg-white rounded-md shadow-md py-8 px-10 my-12 mx-auto transition-all ease-in-out hover:shadow-lg'>
                  <h3 className='text-center text-xl font-semibold font-primary'>
                    Failed to Signup!
                  </h3>
                  <p>An Error occured, you can try again Later!</p>
                  <Link
                    to='/dashboard'
                    className='bg-blue-500 text-white p-3 rounded-md'
                  >
                    Explore the App
                  </Link>
                </div>
              </div>
            );
        }
    }
}



function DisplayData(data) {
    return (
        <div>
            <samp>{JSON.stringify(data, null, 2)}</samp>
        </div>
    );
}

export default GoogleCallback;