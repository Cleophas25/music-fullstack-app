import React from 'react'

function Navbar() {
   return (
     <nav className='bg-muted py-4 sm:px-16 lg:px-24 px-4 flex items-center justify-between border'>
       <div>
         {/* <LinksDropdown /> */}
       </div>
       <div className='flex items-center justify-center gap-x-2'>
         {/* <ThemeToggle />
         <UserButton/> */}
       </div>
     </nav>
   );
}

export default Navbar