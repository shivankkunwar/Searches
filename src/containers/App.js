import React,{ Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';                                                                                                                                                                                                                    
import Scroll from  '../components/Scroll';
// import { peoples } from './peoples';
import './App.css';
 class App extends Component{
     constructor(){
         super()
         this.state={
            peoples:[],
            searchField:''
         }
     }
     onSearchChange = (event) =>{
        this.setState({searchField: event.target.value });
        
            
        
     }
     componentDidMount(){
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(response=>response.json())
         .then(users=>this.setState({peoples:users}));
      
     }
   render(){ 
       const {peoples,searchField}= this.state;
    const filteredPeople = peoples.filter(people=>
        {
            return people.name.toLowerCase().includes(searchField.toLowerCase());
        }
        
        );
    if(peoples.length===0){
        return <h1 className='tc'>LOADING</h1>
    }  
    else{
        return (
        <div className='tc'>
        <h1 className="f1 lh-title ">SEARCHES..</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
        <CardList peoples={filteredPeople}/>
        </Scroll>
        
        </div>
        
    );
    }  
      
    }
}
export default App;