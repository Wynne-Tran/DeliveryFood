import React from 'react'

import {View, StyleSheet,StatusBar} from 'react-native'
import  {SignInContextProvider}  from './src/contexts/authContext'
import {colors} from './src/global/styles'
import RootNavigators from './src/navigation/RootNavigators'


export default function App(){
  return(
    <SignInContextProvider>
    <View style = {styles.container}>
      <StatusBar 
        barStyle = "light-content"
        backgroundColor = {colors.statusbar}
      />
   
        <RootNavigators/>
     
    </View>
    </SignInContextProvider> 
  
  )
}

const styles = StyleSheet.create({
  container: {flex:1}
})