import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import CartScreen from "../screens/CartScreen";
 
 

const Product = (props) => {
 const{items}=props;
 

 function renderItemData(itemData) {
    const item = itemData.item;

    const ProductData = {
      brand: item.brand,
      uri: item.uri,
      rating: item.rating,
      countInStock: item.countInStock,
      price: item.price,
    };

    return (
        <View>
          <CartScreen {...ProductData} />
        </View>
      );
    }
   

 

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItemData}
      />
    </View>
  );

  
};

export default Product;

const styles = StyleSheet.create({
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










// import {
//   Image,
//   Pressable,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import React, { useContext, useState } from "react";
// import IconButton from "./IconButton";
// import tw from "tailwind-react-native-classnames";
// import Button from "../ui/Button";
// import { FavouriteContext } from "../store/Basket";

// const Product = (props) => {
//   const { brand, uri, rating, countInStock, price } = props;
//   const [isPressed, setIsPresses] = useState(false);
 

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <TouchableOpacity
//           style={tw`bg-white mr-3 shadow mb-5`}
//           onPress={() => setIsPresses(!isPressed)}
//         >
//           <Image source={uri} style={tw`h-36 w-64 rounded-sm ml-10 mt-5`} />

//           <View style={tw`px-3 pb-4`}>
//             <Text style={[tw`text-lg font-bold pt-2`, styles.textalign]}>
//               {brand}
//             </Text>

//             <View style={[tw`flex-row items-center ml-1`, styles.contentAlign]}>
//               <IconButton icon="star" color="#FF9900" />

//               <Text style={[tw`text-xs text-gray-500`]}>
//                 <Text style={[tw`text-green-500`]}>{rating}</Text>
//               </Text>
//             </View>

//             <View style={[tw`flex-row items-center ml-1`, styles.contentAlign]}>
//               <Text style={tw`text-green-500`}>
//                 <Text style={styles.textColor}>Count In Stock:</Text>
//                 {countInStock}
//               </Text>
//             </View>

//             <Text
//               style={[
//                 tw`text-lg font-bold pt-2`,
//                 styles.textalign,
//                 styles.colorAmazon,
//               ]}
//             >
//               Amount:<Text style={tw`text-green-500`}>₹{price}</Text>
//             </Text>

            
//           </View>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// export default Product;

// const styles = StyleSheet.create({
//   textalign: {
//     textAlign: "center",
//   },

//   textColor: {
//     color: "#FF9900",
//   },
//   contentAlign: {
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   colorAmazon: {
//     color: "#FF9900",
//   },
// });
