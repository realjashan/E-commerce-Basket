import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FavouriteContext } from "../store/Basket";
import { PRODUCTS } from "../src/data";
import tw from "tailwind-react-native-classnames";
import IconButton from "../components/IconButton";
import Product from "../components/Product";
import Button from "../ui/Button";
 


const CartScreen = (props) => {

  const navigation=useNavigation();
const [isPressed,setIsPresses]=useState(false);

    const{brand,rating,price,uri,countInStock}=props;

   const FavouriteProductCtx = useContext(FavouriteContext);

return(
    <ScrollView>
          <View style={styles.container}>
             <TouchableOpacity
               style={tw`bg-white mr-3 shadow mb-5`}
              onPress={() => setIsPresses(!isPressed)}
            >



              <Image source={uri} style={tw`h-36 w-64 rounded-sm ml-10 mt-5`} />
    
              <View style={tw`px-3 pb-4`}>
                <Text style={[tw`text-lg font-bold pt-2`, styles.textalign]}>
                  {brand}
                </Text>
    
                <View style={[tw`flex-row items-center ml-1`, styles.contentAlign]}>
                  <IconButton icon="star" color="#FF9900" />
    
                  <Text style={[tw`text-xs text-gray-500`]}>
                    <Text style={[tw`text-green-500`]}>{rating}</Text>
                  </Text>
                </View>
    
                <View style={[tw`flex-row items-center ml-1`, styles.contentAlign]}>
                  <Text style={tw`text-green-500`}>
                    <Text style={styles.textColor}>Count In Stock:</Text>
                    {countInStock}
                  </Text>
                </View>
    
                <Text
                  style={[
                    tw`text-lg font-bold pt-2`,
                    styles.textalign,
                    styles.colorAmazon,
                  ]}
                >
                  Amount:<Text style={tw`text-green-500`}>₹{price}</Text>
                </Text>
    
                
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
)  




//   const FavouriteProductCtx = useContext(FavouriteContext);

//   const FavId = route.params.FavId;

//   const ProductIsFavourite = FavouriteProductCtx.ids.includes(FavId);

//   //for data fetching//
// //   const favouriteProduct = PRODUCTS.filter((product) =>
// //     FavouriteProductCtx.ids.includes(product.id)
// //   );

  

 
 

//   if (favouriteProduct.length === 0) {
//     return (
//       <View style={styles.rootContainer}>
//         <Text style={styles.text}>
//           You have not added any product in cart yet!
//         </Text>
//       </View>
//     );
//   }
//   return (
//     <View>
//       <FlatList
//         data={favouriteProduct}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItemData}
//       />
    
//     </View>
    
//   );
};

export default CartScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7A4E43",
  },
  textalign: {
    textAlign: "center",
  },

  textColor: {
    color: "#FF9900",
  },
  contentAlign: {
    alignItems: "center",
    justifyContent: "center",
  },
  colorAmazon: {
    color: "#FF9900",
  },

});
