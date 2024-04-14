import React from 'react';
import { Link } from 'react-router-dom'

const Landing = () => {
   return (
     <main>
       <header className='max-w-6xl mx-auto px-4 sm:px-8 py-6 '>
         <h1 className='font-bold text-4xl'>
           Vybz <span className='text-yellow-400'>Music</span>
         </h1>
       </header>
       <section className='max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center'>
         <div>
           <h1 className='capitalize text-4xl md:text-7xl font-bold'>
             music <span className='text-primary'>tracking</span> app
           </h1>
           <p className='leading-loose max-w-md mt-4 '>
             I am baby wayfarers hoodie next level taiyaki brooklyn cliche blue
             bottle single-origin coffee chia. Aesthetic post-ironic venmo,
             quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
             narwhal.
           </p>
           <div className='flex gap-4 mt-4'>
           <Link to='/dashboard' className='bg-black text-white p-3 rounded-md'>
             Get Started
           </Link>
           <Link to='/auth' className='bg-blue-400 text-white p-3 rounded-md'>
             Register | Login
           </Link>

           </div>
         </div>
         <img src='/images/man.jpg' alt='landing' className='hidden lg:block ' />
       </section>
     </main>
   );
}

export default Landing