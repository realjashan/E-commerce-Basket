import { useContext, useState } from "react";
import { Alert, Image, StyleSheet } from "react-native";
 import {login} from '../auth'
 import AuthContent from '../components/Auth/AuthContent'
import LoadingOverlay from  '../components/ui/LoadingOverlay'
import { AuthContext } from '../../store/auth-context'

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx=useContext(AuthContext);
    async function loginHandler({email,password}) {
    setIsAuthenticating(true);

    try {
    const token = await login(email, password);
    authCtx.authenticate(token);

      
    } catch (error) {
      Alert.alert('Authentication failed!','Could not log you in.Please check your credentials! or try again later');
      setIsAuthenticating(false);
    }
   
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return (
  
  <>
  <Image source={require('../../assets/images/logo.png')} style={styles.image}/>
  <AuthContent isLogin onAuthenticate={loginHandler} />
  

</>
  )
  
  
  ;
}

export default LoginScreen;

const styles = StyleSheet.create({
  image:{
     height:150,
     width:200,
     marginTop:40,
     marginHorizontal:79,
  }
})