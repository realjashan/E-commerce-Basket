import { createContext, useState } from "react";

export const FavouriteContext=createContext({
    ids:[],
    addFavourite:(id)=>{},
    removeFavourite:(id)=>{},
})

function FavouriteContextProvider({children}){

const [favouriteProductIds,setFavouriteProductIds]=useState([]);

function addFavourite(id){
    setFavouriteProductIds((currentFavIds)=>[
...currentFavIds,id
    ]);

    
}

function removeFavourite(id){
    setFavouriteProductIds((current)=> current.filter((mealID)=>mealID !==id))

}

const value={
    ids:favouriteProductIds,
    addFavourite:addFavourite,
    removeFavourite:removeFavourite,
}

return <FavouriteContext.Provider value={value}>{children}</FavouriteContext.Provider>

}

export default FavouriteContextProvider