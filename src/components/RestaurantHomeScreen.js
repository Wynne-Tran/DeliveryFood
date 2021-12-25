import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RestaurantHeader from './RestaurantHeader'
import {restaurantsData} from '../global/Data'
import {colors} from "../global/styles"
import {Icon} from 'react-native-elements'

const RestaurantHomeScreen = ({navigation, route}) => {

    const {id, restaurant} = route.params
    return (
        <View style = {styles.container}>
            <RestaurantHeader id = {id} navigation={navigation}/>
        </View>
    )
}

export default RestaurantHomeScreen

const styles = StyleSheet.create({
    container:{
        height:150,
        paddingTop: 35
    },


    view1: {flexDirection:"row",
            alignItems:"baseline",
        justifyContent:"space-between"
        },

    view2:{margin:10,
        width:40,
        height:40,
        backgroundColor:colors.cardbackground,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
        },

    view3:{marginTop:0,
        margin:10,
        width:40,
        height:40,
        backgroundColor:colors.cardbackground,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
        },
        
    view4:{ marginTop:0,
            alignItems:"center",
            justifyContent:"center" 
        },
})
