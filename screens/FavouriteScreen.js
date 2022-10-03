import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
 
 
import { PRODUCTS } from "../src/data";
import { FavouriteContext } from "../store/Basket";
import Product from "../components/Product";
const FavouriteScreen = () => {
  const FavouriteProductCtx = useContext(FavouriteContext);

  
  const favouriteProduct = PRODUCTS.filter((product) =>
    FavouriteProductCtx.ids.includes(product.id)
  );

  if (favouriteProduct.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no Product in Cart yet!</Text>
      </View>
    );
  }

  return <Product items={favouriteProduct} />;
};

export default FavouriteScreen;

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
});