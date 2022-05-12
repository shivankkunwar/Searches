import React,{ useState,  useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';                                                                                                                                                                                                                    
import Scroll from  '../components/Scroll';
// import { peoples } from './peoples';
import './App.css';
 function App (){
 

    const [peoples,setPeoples]=useState([]);
    const [searchField,setSearchField]=useState("");
    // const [count,setCount]= useState(0);
     
     const onSearchChange = (event) =>{
        setSearchField(event.target.value);
        
        
     }
     useEffect(()=>{
   
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(response=>response.json())
         .then(users=>{setPeoples(users)});
        // console.log(count);
     },[]);
    //  },[count]);
 
    const filteredPeople = peoples.filter(people=>
        {
           
            return people.name.toLowerCase().includes(searchField.toLowerCase());
        }
        
        );
        

        return !peoples.length?
        <h1 className='tc'>LOADING</h1>:
        (<div className='tc'>

        <h1 className="f1 lh-title ">SEARCHES....</h1>
        {/* <button onClick={()=>{setCount(count+ 1)}}>Click HERE</button> */}
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
        <CardList peoples={filteredPeople}/>
        </Scroll>
        
        </div>)
   
      
    
}
export default App;