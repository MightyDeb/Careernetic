
import React, { Suspense } from 'react'
import {BarLoader} from "react-spinners"


const Layout = ({children}) => {
  
  return (
    <div className="px-5 container mx-auto mt-20 mb-20">
      <Suspense fallback= {
        <BarLoader className="mt-4" width={"100%"} color="gray" /> }
      >
      
        {children}
        
        
      </Suspense>     
    </div>
  )
}

export default Layout