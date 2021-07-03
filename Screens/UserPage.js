import React,{useState} from 'react';
import {ActivityIndicator,View, Text,Alert ,Button, SafeAreaView,ImageBackground,Dimensions} from 'react-native';

const UserPage = ({navigation}) => {
    const height = Dimensions.get('screen').height;
    const width = Dimensions.get('screen').width
    const [load, setLoad] = useState('false')

    const ON = () => {
        setLoad('true');
        setTimeout(()=>{
            setLoad('false');
            Alert.alert('OOPS', 'Taking too long to Login')
        }, 5000)
    }

    const OFF = () => {
        setLoad('false');
    }

    return(
        <ImageBackground style={{height:height,width:width}} source={require('../images/img1.jpeg')}>
            <SafeAreaView style={{flex:1}}>       
                <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                    <View>
                        <View style={{position:'absolute',justifyContent:'center',alignItems:'center',paddingTop:200}}>
                            <ActivityIndicator animating={load} size='large' />
                        </View>
                        <Button title='ON' onPress={ON} />
                        <Button title='OFF' onPress={OFF} />
                    </View>
                    <Text style={{fontSize: 30}}> This is the User Page</Text>
                    <Button title='Go to Home' onPress={()=> {navigation.replace('Home')}} />
                </View>
            </SafeAreaView>
        </ImageBackground>
       
    )
}

export default UserPage;