import React, {Component} from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, StatusBar, SafeAreaView, Platform} from 'react-native';
import axios from 'axios'
import MapView, {Marker} from 'react-native-maps';

export default class LocationScreen extends Component {
    
    constructor(){
        super();
        this.state ={
            location: {}
        }
    }

    getIssLocation = () =>{
        axios.get("https://api.wheretheiss.at/v1/satellites/25544").then(response => {
            this.setState({location: response.data})
        }).catch(error =>{
            alert(error.message)
        })
    }
    componentDidMount (){
        this.getIssLocation();
        console.log(this.state.location)
    }



    render (){
        if(Object.keys(this.state.location).length === 0){
            return(
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text> Carregando... </Text>
                </View>
            )
        } else{

             return(
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea}/>
                    <ImageBackground style={styles.backgroundImage} source={require('../assets/iss_bg.jpg')}>
                        <View style={styles.titleBar}>
                            <Text style={styles.titleText}>Localização ISS</Text>
                        </View>
                        <View style={styles.mapContainer}>
                            <MapView 
                            style={styles.map} 
                            region={{
                                latitude: this.state.location.latitude,
                                longitude: this.state.location.longitude,
                                latitudeDelta: 100,
                                longitudeDelta: 100
                            }}>
                                <Marker coordinate={{ latitude: this.state.location.latitude, longitude: this.state.location.longitude}}>
                                    <Image source={require('../assets/iss_icon.png')} style={{width: 50, height:50}}/>
                                </Marker>
                                
                            </MapView>
                        </View>

                    </ImageBackground>
                </View>
        )
    }
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
    },
    mapContainer:{
        flex: 0.6
    },
    map:{
        width: '100%',
        height: '100%'
    }

})