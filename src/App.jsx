import { useEffect,useState,useRef } from 'react';
import './App.scss'
import Card from './components/CardTemp'
import foodsData from "./constants/content"

function App() {
  const [foods,setFoods]=useState([]);
  const [filter,setFilter]=useState(null);
  const filterRef=useRef(null);

  const checkTag = (tag)=>{
    return tag == filter;
  }

  useEffect(()=>{
    if(filter==null){
      setFoods(foodsData);
    }else{
      const newList = foodsData.filter((food)=>{
        return food.tags.some(checkTag)
      })

      setFoods(newList)
    }
    
  },[filter])

  const cards = foods.map(food=>{
    return <Card key={food.name} foodName={food.name} foodOptions={food.options} foodTags={food.tags}/>
  });

  const handleFilter=(item)=>{
    const selectedFilter =item.target.textContent;
    filterRef.current.childNodes.forEach(element => {
      element.classList.remove('active')
    });
    filterRef.current.childNodes.forEach(element => {
      if(element.textContent == selectedFilter){
        element.classList.add('active')
      }
    });

    if(selectedFilter == "نمایش همه"){
      setFilter(null);
    }else{
      setFilter(selectedFilter);
    }

  }
  return (
    <>
    <div className='filter' >
      <h2>فیلتر</h2>
      <div className='filter-options' ref={filterRef}>
        <span 
        className='active'
        onClick={(e)=>handleFilter(e)}
        >
          نمایش همه
          </span>
        <span onClick={(e)=>handleFilter(e)}>برنجی</span>
        <span onClick={(e)=>handleFilter(e)}>نانی</span>
        <span onClick={(e)=>handleFilter(e)}>ماکارونی</span>
      </div>
    </div>
      <div className='main'>{cards}</div>
    </>
  );
}

export default App
