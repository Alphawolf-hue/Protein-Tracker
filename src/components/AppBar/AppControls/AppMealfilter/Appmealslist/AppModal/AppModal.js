import React from 'react'

const AppModal=({setOpenModal})=> {
  return (
    <div className='app_modal'>
        <h3>Protein Must Be Bigger Than 0 and Meal Name Cannot Be Blank</h3>
        <button className='button_close_modal' onClick={()=>setOpenModal(false)}>
            Close</button>
    </div>
  )
}

export default AppModal