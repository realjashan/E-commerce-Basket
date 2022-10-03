import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames";
import list, { PRODUCTS } from '../src/data'
import { StarIcon } from "react-native-heroicons/solid";
import IconButton from './IconButton';
import { useNavigation } from '@react-navigation/native';

const ProductView = () => {
const navigation=useNavigation();


  return (
    <ScrollView>

            <View  style={styles.container}>

{PRODUCTS.map((product)=>(
 
//   <View key={product.id}>
//       <Image source={product.uri} style={styles.image}/>

// <View style={styles.textInfo}>
// <Text>
// •{product.name}


// </Text>
// <Text>•{product.brand}</Text>
// <Text>•{product.price}</Text>

// </View>


//   </View>

<SafeAreaView>
   
<TouchableOpacity
onPress={()=>{
    navigation.navigate("Details", {
    FavId:product.id,
    Image:product.uri,
    descrpition:product.description,
    countInStock:product.countInStock,
    price:product.price,



      });
}}
 
 
   
      style={tw`bg-white mr-3 shadow mb-5`}
    >
        <View key={product.id}>
      <Image
        source={product.uri}
        style={tw`h-36 w-64 rounded-sm ml-10 mt-5`}
      />

      <View style={tw`px-3 pb-4`}>
        <Text style={[tw`text-lg font-bold pt-2`,styles.textalign]}>{product.brand}</Text>

        <View style={[tw`flex-row items-center ml-1`,styles.contentAlign]}>
 <IconButton icon='star' color="#FF9900"/>

          <Text style={[tw`text-xs text-gray-500`]}>
            <Text style={[tw`text-green-500`]}>{product.rating}</Text> 
          </Text>
        </View>

        <View style={[tw`flex-row items-center ml-1`,styles.contentAlign]}>
 
          <Text style={tw`text-green-500`}><Text style={styles.textColor}>Count In Stock:</Text>{product.countInStock}</Text>
        </View>
      </View>

      </View>
    </TouchableOpacity>

    </SafeAreaView>
   





))}

</View>
</ScrollView>
   
  )
}

export default ProductView

const styles = StyleSheet.create({
 textalign:{
    textAlign:'center',
 
 },

 textColor:{
    color:'#FF9900',
 },
 contentAlign:{
    alignItems:'center',
    justifyContent:'center',
 }
  
})