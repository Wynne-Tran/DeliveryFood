import React, {useState, useRef} from 'react'
import { StyleSheet, Text, View, StatusBar, TextInput } from 'react-native';
import {colors, parameters, title} from "../../global/styles"
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable'
import { Icon, Button, SocialIcon } from 'react-native-elements';

const SignInScreen = () => {

    const[textInput2Fossued, setTextInput2Fossued] = useState(false)

    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

    return (
        <View style = {styles.container}>
            <Header title= "MY ACCOUNT" type="arrow-left"/>
            <View style = {{marginLeft: 20, marginTop: 10}}>
                <Text style = {title} >Sign In</Text>
            </View>
            <View style = {{alignItems: "center", marginTop: 10}}>
                <Text style = {styles.text1} >Please enter email and password</Text>
                <Text style = {styles.text1} >Registered with your account</Text>

            </View>
            <View style = {{marginTop: 10}}>
                <View>
                    <TextInput 
                        style = {styles.TextInput1}
                        placeholder='Email'
                        ref = {textInput1}
                    />
                </View>
                <View style = {styles.TextInput2}>
                    <Animatable.View animation={textInput2Fossued ? "" : "fadeInLeft"} duration={400} >
                        <Icon 
                            name="lock"
                            iconStyle = {{color:colors.grey3}}
                            type = "material"
                            styles = {{}}
                        />
                    </Animatable.View>
                    <TextInput 
                            style = {{width: "80%"}}
                            placeholder='Password'
                            ref = {textInput2}
                            onFocus={() => {
                                setTextInput2Fossued(false)
                            }}
                            onBlur={() => {
                                setTextInput2Fossued(true)
                            }}
                        />
                    <Animatable.View animation={textInput2Fossued ? "" : "fadeInLeft"} duration={400} >
                        <Icon 
                            name="visibility-off"
                            iconStyle = {{color:colors.grey3}}
                            type = "material"
                            style = {{marginRight: 10}}
                        />
                    </Animatable.View>
                </View>


                <View style = {{marginHorizontal: 20, marginTop: 30}}>
                    <Button 
                        title = "SIGN - IN"
                        buttonStyle = {parameters.styledButton}
                        titleStyle = {parameters.buttonTitle}
                    />
                </View>

                <View style = {{alignItems: "center", marginTop: 20}}>
                    <Text style = {{...styles.text1, textDecorationLine: "underline"}}>Forgot Password ?</Text>
                </View>

                <View style = {{alignItems: "center", marginTop: 20, marginBottom: 20}}>
                    <Text style = {{fontWeight: "bold", fontSize: 20}}>OR</Text>
                </View>

                <View style = {{marginHorizontal: 5, marginTop: 5}}>
                    <SocialIcon 
                        title = "Sign In With Facebook"
                        button 
                        type= "facebook"
                        style = {styles.socialIcon}
                        onPress = {() => {}}
                    />
                </View>

                <View style = {{marginHorizontal: 10, marginTop: 5}}>
                    <SocialIcon 
                        title = "Sign In With Google"
                        button 
                        type= "google"
                        style = {styles.socialIcon}
                        onPress = {() => {}}
                    />
                </View>

                <View style = {{marginTop: 10, marginLeft: 20, marginBottom: 5}}>
                    <Text style = {{...styles.text1}}>New on XpressFood ?</Text>
                </View>

                <View style = {{alignItems: "flex-end", marginHorizontal: 20}}>
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

export default SignInScreen

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    text1:{
        color: colors.grey3,
        fontSize: 16
    },
    TextInput1 : {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        height: 40,
        paddingLeft: 15
    },
    TextInput2: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 20,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent:"space-between",
        alignContent: "center",
        alignItems: "center",
        height: 40,
        paddingLeft: 15
    },
    socialIcon: {
        borderRadius: 12,
        height: 50
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
        color: "#ff8c52",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3
    }
})