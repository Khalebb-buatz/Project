import React from 'react';
import { View, Text, Button, SafeAreaView, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';

const HomePage = ({navigation}) => {
    const height = Dimensions.get('screen').height;
    const width = Dimensions.get('screen').width
    return(
        <ImageBackground style={{flex:1,height:height,width:width}} source={require('../images/img1.jpeg')} >
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1}}>
                    <View style={{flex:1,justifyContent:'center',paddingHorizontal:35}}>
                        <TouchableOpacity activeOpacity={0.7} onPress={()=> {navigation.replace('UserRoute')}} >
                                <View style={{height:60,backgroundColor:'#EEEEEE',borderRadius:20,justifyContent:'center',alignItems:'center',marginTop:50,borderColor:'grey',borderWidth:0.5,shadowColor:'black',shadowRadius:10,shadowOpacity:0.6,shadowOffset:{width:-5,height:3}}}>
                                    <Text style={{fontSize:20, fontWeight:'600'}}>User</Text>
                                </View>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.7} onPress={()=> {navigation.push('AdminLoginPage')}} >
                                <View style={{height:60,backgroundColor:'#EEEEEE',borderRadius:20,justifyContent:'center',alignItems:'center',marginTop:50,borderColor:'#BEBEBE',borderWidth:0.5,shadowColor:'black',shadowRadius:10,shadowOpacity:0.6,shadowOffset:{width:-5,height:3}}}>
                                    <Text style={{fontSize:20, fontWeight:'600'}}>Admin</Text>
                                </View>
                        </TouchableOpacity>
                    </View>                    
                </View> 
            </SafeAreaView>
        </ImageBackground>     
    )
}

export default HomePage;