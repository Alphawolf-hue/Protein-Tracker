import React,{useState,useEffect} from 'react';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import Appcontrolscounte from './components/AppBar/AppControls/Appcontrolscounte';
import Appcontoldelete from './components/AppBar/AppControls/Appcontoldelete';
import AppControlsinput from './components/AppBar/AppControls/AppControlsinput';
import Appmealslist from './components/AppBar/AppControls/AppMealfilter/Appmealslist/Appmealslist';
import AppModal from './components/AppBar/AppControls/AppMealfilter/Appmealslist/AppModal/AppModal';
import Appmealfilter from './components/AppBar/AppControls/AppMealfilter/Appmealslist/Appmealfilter';

const App=()=> {
  const [meals,setMeals]=useState([]);
  const [mealname,setMealName]=useState("");
  const[protein,setProtein]=useState(0);
  const[openmodal,setOpenModal]=useState(false);
 const[selectedFilter,setSelectedFilter]=useState("");
  const addmealhandler = ()=>{
    const oldmeals=[...meals];
    const meal={
      mealname,
      protein,
      id:Math.floor(Math.random()*1000),
    };

    const newMeals=oldmeals.concat(meal);
    if(protein<=0 || mealname===""){
    setOpenModal(true);
    }else{
      setMeals(newMeals);
      localStorage.setItem("meals",JSON.stringify(newMeals));
    }

    setMealName("");
    setProtein(0);
  };

  const deletemealhandler=(id)=>{
      const oldmeals=[...meals];
      const newmeals=oldmeals.filter((meal)=>meal.id!==id);
      setMeals(newmeals);
      localStorage.setItem("meals",JSON.stringify(newmeals));
  }

  const deleteallmeals=()=>{
    setMeals([]);
    localStorage.clear();
  }

  const total=meals
  .map((meal)=>meal.protein)
  .reduce((acc,value)=>acc+ +value,0);
  
  useEffect(()=>{
     const oldState=[...meals];
     if(selectedFilter==="Ascending"){
      const ascendingMeals=oldState.sort((a,b)=> a.protein-b.protein);
      setMeals(ascendingMeals);
     }else if(selectedFilter==="Descending"){
      const descendingMeals=oldState.sort((a,b)=> b.protein-a.protein);
      setMeals(descendingMeals);
     }
  },[selectedFilter,meals]);

  return (
    <div className="App">
      <AppBar />
      <Appcontrolscounte total={total}/>
      <Appcontoldelete deleteallmeals={deleteallmeals}/>
      {openmodal? <AppModal setOpenModal={setOpenModal}/>: ""}
      <AppControlsinput addmealhandler={addmealhandler} mealName={mealname} protein={protein}
      setMealName={setMealName} setProtein={setProtein}
      />
      <div className='app_meals_container'>
        <Appmealfilter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
        <Appmealslist meals={meals} deletemealhandler={deletemealhandler}/>
      </div>
    </div>
  );
};

export default App;
