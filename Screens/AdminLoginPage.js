import React from 'react';
import { View, Text, SafeAreaView, Button, ImageBackground, Dimensions,TouchableOpacity} from 'react-native';

export default function AdminLoginPage ({navigation}){
    const height = Dimensions.get('screen').height;
    const width = Dimensions.get('window').width;

    return(
        <ImageBackground style={{height:height, width:width}} source={require('../images/img1.jpeg')}>
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1}}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:50,fontWeight:'700'}}>Login  </Text>
                    </View>
                    <View style={{flex:4,marginTop:30,paddingHorizontal:35}}>
                        <View style={{borderColor:'#BEBEBE',borderWidth:1,backgroundColor:'#fbfbfb',height:60,marginTop:30,borderRadius:25,alignItems:'center',paddingHorizontal:10,flexDirection:'row'}}>
                            <Text style={{fontSize:18,fontWeight:'600'}}>Username: </Text>
                            <View style={{borderColor:'grey',backgroundColor:'white',borderWidth:0.5,height:'80%', width:'65%'}}></View>
                        </View>
                        <View style={{borderColor:'#BEBEBE',borderWidth:0.5,backgroundColor:'#fbfbfb',height:60,marginTop:30,borderRadius:25,alignItems:'center',paddingHorizontal:10,flexDirection:'row'}}>
                            <Text style={{fontSize:18,fontWeight:'600'}}>Password: </Text>
                            <View style={{borderColor:'grey',backgroundColor:'white',borderWidth:0.5,height:'80%', width:'66%'}}></View>
                        </View>


                        <View style={{height:50,marginTop:100,flexDirection:'row',paddingHorizontal:30}}>
                            <TouchableOpacity onPress={()=>{navigation.goBack()}} activeOpacity={0.6} style={{flex:1,borderColor:'black',borderWidth:0.5,backgroundColor:'red',marginRight:20,borderRadius:20,justifyContent:'center',alignItems:'center',shadowColor:'black',shadowRadius:6,shadowOpacity:0.8,shadowOffset:{width:-3,height:4}}} >
                                <View >
                                    <Text style={{color:'white',fontSize:18,fontWeight:'700'}} >GO BACK</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{navigation.replace('AdminRoute')}} activeOpacity={0.6} style={{flex:1,borderColor:'black',borderWidth:0.5,backgroundColor:'blue',marginLeft:20,borderRadius:20,justifyContent:'center',alignItems:'center',shadowColor:'black',shadowRadius:6,shadowOpacity:0.8,shadowOffset:{width:-3,height:4}}} >
                                <View >
                                    <Text style={{color:'white',fontSize:18,fontWeight:'700'}} >LOGIN </Text>
                                </View>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                    
                    
                </View>
            </SafeAreaView>
        </ImageBackground>
        
    )
}