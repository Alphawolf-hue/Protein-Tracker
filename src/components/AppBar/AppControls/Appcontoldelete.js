import React from 'react'

const Appcontoldelete=({deleteallmeals})=> {
  return (
    <div className='app_controls_delete'>
       <button className='button_delete' onClick={()=>deleteallmeals()}>
        DELETE  ALL</button>
    </div>
  )
}

export default Appcontoldelete