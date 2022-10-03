import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import tw from "tailwind-react-native-classnames";

import { ChevronRightIcon, QuestionMarkCircleIcon } from "react-native-heroicons/solid";
import list, { PRODUCTS } from "../src/data";
import IconButton from "../components/IconButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import Button from "../ui/Button";
import { FavouriteContext } from "../store/Basket";

const ProductDetail = ({ route,navigation }) => {
  const FavId = route.params.FavId;

const FavouriteProduct=useContext(FavouriteContext);

const ProductIsFavourite=FavouriteProduct.ids.includes(FavId);
 
 

//   const selectedProduct = list.find((list) => list.id === FavId);
const selectedProduct = PRODUCTS.find((product) => product.id === FavId);
 
function onCartHandler(){
   
    if(ProductIsFavourite){
     FavouriteProduct.removeFavourite(FavId);
    }

    else{
      FavouriteProduct.addFavourite(FavId);
    }
  
  


}






  useLayoutEffect(() => {
    // navigation.setOptions({
    //   headerRight: () => {
    //     return (
    //       <IconButton
    //         icon='star'
    //         color="white"
           
    //         // onPress={headerHandler}
    //       />
    //     );
    //   },
    // });


  }, [navigation]);

 
 

  return (
    <ScrollView>
 

    <View>
    <Image style={styles.image} source={selectedProduct.uri}/>
    </View>

    <View>
<Text style={styles.title}>{selectedProduct.category}</Text>
<Text style={styles.detailText}>{selectedProduct.description}</Text>

</View>

<View>
<TouchableOpacity style={tw`flex-row items-center pt-4 pb-4 pr-2  border-gray-300`}>
        
          <Text style={tw`pl-2 flex-1 font-bold`}>
learn More..
          </Text>
          <AntDesign name="rightcircle" size={20} color="black" />
        </TouchableOpacity>
</View>
<View style={{flexDirection:'row',
justifyContent:'space-between',marginHorizontal:4}}>
<View style={{marginHorizontal:4,}}>
    <Text style={styles.textPrice}>Price:
        
        <Text style={{color:'#263EA9'}}>₹{selectedProduct.price}</Text></Text>
    

</View>

<View>
    <Text style={styles.textCount} >Count In Stock:<Text style={selectedProduct.countInStock>=10 ? styles.textCount:styles.red}>{selectedProduct.countInStock}</Text></Text>

</View>

</View>

<View>
   {
   ProductIsFavourite ? <Button onPress={onCartHandler}>Remove From Cart</Button> :<Button onPress={onCartHandler}>Add To Cart</Button>
   } 
</View>




 
</ScrollView>


    
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  image: {
    height: 325,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "black",
   
  },
  detailText: {
    color: "gray",
    marginHorizontal:4,
  },
  listOuterContainer: {
    alignItems: "center",
  },
  rootContainer: {
    marginBottom: 32,
  },

  textPrice:{
    color:'gray',
    fontWeight:'bold',
    fontSize:'20',
  },
  textCount:{
    color:'gray',
    fontWeight:'bold',
    fontSize:'20',
    marginHorizontal:4,
    
  },

  red:{
    color:'red',
    fontWeight:'bold',

  }
});
