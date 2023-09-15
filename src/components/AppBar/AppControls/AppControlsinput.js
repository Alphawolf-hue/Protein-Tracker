import React from 'react'

const AppControlsinput=({addmealhandler,protein,mealname,setMealName,setProtein})=> {
    
    const onaddmealclick=()=>{
        addmealhandler();
    }
  return (
    <div className='app_controls'>
        <div className='app_controls_input'>
            <input type='text'
             placeholder='Meal' 
             value={mealname} 
             onChange={(e)=>setMealName(e.target.value)}
             />
            <input type='number' 
            placeholder='Protein in gms' 
            value={protein} 
            onChange={(e)=>setProtein(e.target.value)}
            min={0}
            />
            <button onClick={onaddmealclick}>Add Meal</button>
        </div>
    </div>
  );
};

export default AppControlsinput