import React from "react";
import Card from "./Card";
const CardList=({peoples})=>{
    
    return(
        <div>
        {peoples.map((user,i)=>{
        return (
                <Card 
                key ={peoples[i].id}
                id={peoples[i].id}
                name={peoples[i].name} 
                email={peoples[i].email}
                />

    )})};
      </div>
    );
}
export default CardList;