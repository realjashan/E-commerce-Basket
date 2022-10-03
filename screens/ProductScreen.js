import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ProductView from "../components/ProductView";

import list from "../src/data";
import { AuthContext } from "../store/auth-context";
import axios from "axios";

const ProductScreen = () => {
  const authCtx=useContext(AuthContext);
  const token=authCtx.token;

  const [fetchedMessage, setFetchedMessage] = useState("");

  useEffect(() => {
    axios.get("https://sign-up-c4809-default-rtdb.firebaseio.com/message.json?auth=" + token).then((response)=>{
 setFetchedMessage(response.data);
    });
  }, []);



  return  <ProductView/>
 
};

export default ProductScreen;

const styles = StyleSheet.create({});
