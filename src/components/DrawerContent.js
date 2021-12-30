import React, {useState, useContext, useEffect} from 'react'
import { StyleSheet, Text, View, Linking, Pressable, Alert, Switch } from 'react-native'
import {DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer'
import {Avatar, Button, Icon} from 'react-native-elements'
import {colors} from '../global/styles'
import {auth} from '../../firebase'


const DrawerContent = (props) => {


    const handleSignOut = () => {
        auth
        .signOut()
        .then(props.navigation.navigate('SignInWelcomeScreen'))
        .catch(error => alert(error.message))
    }

    return (
        <View style = {styles.container}>
            <DrawerContentScrollView {...props} >
                <View style = {{backgroundColor: colors.buttons}}>
                    <View style = {{flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingVertical: 10}}>
                        <Avatar 
                            rounded
                            avatarStyle = {styles.avatar}
                            size = {75}
                            source = {require('../../assets/images/menu-image5.jpg')}
                        />
                        <View style = {{marginLeft:10}}>
                            <Text style={{fontWeight:'bold', color:colors.cardbackground, fontSize:18}}>John Mark</Text>
                            <Text style = {{color: colors.cardbackground, fontSize:14}}>john@gmail.com</Text>
                        </View>
                    </View>

                    <View style = {{flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 5}}>
                        <View style = {{flexDirection:'row', marginTop: 10}}>
                            <View style={{marginLeft: 10, alignItems: 'center', justifyContent:'center'}}>
                                <Text style = {{fontWeight: 'bold', color: colors.cardbackground, fontSize: 18}}>1</Text>
                                <Text style = {{color: colors.cardbackground, fontSize: 14}}>My Favorites</Text>
                            </View>
                        </View>

                        <View style = {{flexDirection:'row', marginTop: 10}}>
                            <View style={{marginLeft: 10, alignItems: 'center', justifyContent:'center'}}>
                                <Text style = {{fontWeight: 'bold', color: colors.cardbackground, fontSize: 18}}>0</Text>
                                <Text style = {{color: colors.cardbackground, fontSize: 14}}>My Cart</Text>
                            </View>
                        </View>
                    </View>
               
                </View>

                <DrawerItemList {...props} />

                <DrawerItem 
                    label = "Payment"
                    icon = {({color, size}) => (
                        <Icon 
                            type = "material-community"
                            name = "credit-card-outline"
                            color = {color}
                            size = {size}

                        />
                    )}
                />

                <DrawerItem 
                    label = "Promotions"
                    icon = {({color, size}) => (
                        <Icon 
                            type = "material-community"
                            name = "tag-heart"
                            color = {color}
                            size = {size}

                        />
                    )}
                />


                <DrawerItem 
                    label = "Settings"
                    icon = {({color, size}) => (
                        <Icon 
                            type = "material-community"
                            name = "cog-outline"
                            color = {color}
                            size = {size}

                        />
                    )}
                />

                <DrawerItem 
                    label = "Help"
                    icon = {({color, size}) => (
                        <Icon 
                            type = "material-community"
                            name = "lifebuoy"
                            color = {color}
                            size = {size}

                        />
                    )}
                />

                <View style = {{borderTopWidth: 1, borderTopColor: colors.grey5}}>
                    <Text style = {styles.preferences}>Preferences</Text>
                    <View style = {styles.SwitchText}>
                        <Text style = {styles.darktheme}>Dark Theme</Text>
                        <View style = {{paddingRight: 10, }}>
                            <Switch 
                                trackColor={{false: "#767577", true: "#81b0ff"}}
                                thumbColor="#f4f3f4"
                            />
                        </View>
                    </View>
                </View>
                
            </DrawerContentScrollView>

            <DrawerItem 
                    style = {{marginBottom: 30}}
                    label = "Sign Out"
                    icon = {({color, size}) => (
                        <Icon 
                            type = "material-community"
                            name = "logout-variant"
                            color = {color}
                            size = {size}

                        />
                    )}
                    onPress={handleSignOut}
                />
        </View>

    )
}

export default DrawerContent

const styles = StyleSheet.create({
    container: {
        flex:1,

    },
    avatar: {
        borderColor: colors.pagebackground,
        
    },
    preferences : {
        fontSize: 16,
        color: colors.grey2,
        paddingTop: 10, 
        paddingLeft: 20
    },
    SwitchText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingVertical: 5,
        paddingRight: 10
    },
    darktheme: {
        fontSize: 16,
        color: colors.grey2,
        paddingTop: 10, 
        paddingLeft: 0,
        fontWeight: "bold",
    }
})
