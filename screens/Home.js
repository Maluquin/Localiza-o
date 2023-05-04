import React, {Component} from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, Image, ImageBackground } from 'react-native';

export default class HomeScreen extends Component {
    render (){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>

                <ImageBackground source={require('../assets/iss_bg.jpg')} style={styles.backgroundImage}>

                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>App Rastreador</Text>
                    </View>

                    <TouchableOpacity style={styles.card} onPress={()=> this.props.navigation.navigate('Location')}>
                        <Text style={styles.cardText}>Localização EEI</Text>
                        <Image source={require('../assets/iss_icon.png')} style={styles.icon}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card} onPress={()=> this.props.navigation.navigate('Meteor')} >
                        <Text style={styles.cardText}>Meteoros</Text>
                        <Image source={require('../assets/meteor_icon.png')} style={[styles.icon, {width: 301}]}/>
                    </TouchableOpacity>

                </ImageBackground>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea:{
        marginTop: Platform.OS === "android"? StatusBar.currentHeight : 0
    },
    titleBar:{
        flex: 0.15,
        justifyContents: 'center',
        alignItems: 'center'

    },
    titleText:{
        color: '#BFCCDC',
        fontSize: 40,
        fontWeight: 'bold'

    },
    backgroundImage:{
        flex: 1,
        resizeMode: 'cover'
    },
    card:{
        flex:0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: '#BFCCDC'
    },
    cardText:{
        color: 'darkBlue',
        fontSize: 30,
        fontWeight:'bold',
        marginTop: 70,
        paddingLeft: 30
    },
    icon:{
        position: 'absolute',
        height: 200,
        width: 200,
        resizeMode: 'contain',
        right: 20,
        top: -80
    }

})