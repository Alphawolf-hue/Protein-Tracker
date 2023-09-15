import React from 'react'

const Appmealslist=({meals,deletemealhandler})=> {

    
  return (
    <div className='app_meals_container_wrapper'>
         {meals.map((meal,index)=>(
           <div key={index} className='app_meals_container_wrapper_inner'>
            <div>{`${meal.mealname}:${meal.protein}`}</div>
            <div>
                <button className='button_delete_meal'
                 onClick={()=>deletemealhandler(meal.id)}>
                    Delete
                    </button>
            </div>
           </div>
         ))}
    </div>
  )
}

export default Appmealslist