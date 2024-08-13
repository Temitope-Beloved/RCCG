import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
const layout = ({children}) => {
  return (
      <div className='flex '>
          <div className=" flex-1">
              <Sidebar/>
          </div>
          <div className='flex-[4]'>
              <Navbar />
              {children}
          </div>
      
    </div>
  )
}

export default layout
