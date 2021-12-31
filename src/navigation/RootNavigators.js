import React,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import  AuthNavigators  from '../navigation/authNavigators';
import  AppStack  from '../navigation/AppStack';
import { SignInContext } from '../contexts/authContext';



export default function RootNavigators(){

    const {signedIn} = useContext(SignInContext)

    return(
    <NavigationContainer>
        {signedIn.userToken === null  ?  <AuthNavigators />: <AppStack/>}
    </NavigationContainer>
    )
}