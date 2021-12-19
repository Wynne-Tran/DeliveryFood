import React, {useState, useRef} from 'react'
import { StyleSheet, Text, View, Image} from 'react-native';
import {colors, parameters, title} from "../../global/styles"
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable'
import { Icon, Button, SocialIcon } from 'react-native-elements';
import Swiper from 'react-native-swiper/src'

const SignInWelcome = () => {
    return (

       <View style={{flex: 1}}>
            <View style = {{flex: 3, justifyContent:'flex-start', alignItems:'center', paddingTop: 20}}>
            <Text style = {{fontSize:26, color: colors.buttons, fontWeight:'bold'}}>DISCOVER RESTAURANTS</Text>
            <Text style = {{fontSize:26, color: colors.buttons, fontWeight:'bold'}}>IN YOUR AREA</Text>
            </View>

            <View style = {{flex:4, justifyContent:"center"}}>
                <Swiper autoplay = {true}>
                    <View style = {styles.slide1}>
                        <Image 
                            source = {require('../../../assets/images/blog1.png')}
                            style = {{height: "100%", width:"100%"}}
                        
                        />
                    </View>

                    <View style = {styles.slide1}>
                        <Image 
                            source = {require('../../../assets/images/blog2.png')}
                            style = {{height: "100%", width:"100%"}}
                        
                        />
                    </View>

                    <View style = {styles.slide1}>
                        <Image 
                            source = {require('../../../assets/images/blog3.png')}
                            style = {{height: "100%", width:"100%"}}
                        
                        />
                    </View>

                    <View style = {styles.slide1}>
                        <Image 
                            source = {require('../../../assets/images/menu-image1.jpg')}
                            style = {{height: "100%", width:"100%"}}
                        
                        />
                    </View>
                </Swiper>
            </View>

            <View style = {{flex:4, justifyContent:"flex-end", marginBottom: 20}}>
                <View style = {{marginHorizontal: 20, marginTop: 30, marginBottom: 20}}>
                    <Button 
                        title = "SIGN - IN"
                        buttonStyle = {parameters.styledButton}
                        titleStyle = {parameters.buttonTitle}
                    />
                </View>
                <View></View>

                <View style = {{marginHorizontal: 20}}>
                    <Button 
                        title="Create an account"
                        buttonStyle={styles.createButton}
                        titleStyle = {styles.createButtonTitle}
                    />
                </View>
            </View>


       </View>

    )
}

export default SignInWelcome

const styles = StyleSheet.create({
    slide1: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#97CAE5"
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    createButton:{
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ff8c52",
        height: 50,
        paddingHorizontal: 20,

    },
    createButtonTitle:{
        color: colors.grey1,
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3
    }
})
