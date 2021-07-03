import React from 'react';
import { View, Text, Button, SafeAreaView, ScrollView,Dimensions,TouchableOpacity} from 'react-native';

const AdminPage = ({navigation}) => {
    const height = Dimensions.get('screen').height
    const width = Dimensions.get('screen').width
    return(
        <SafeAreaView style={{flex:1}}>
            <ScrollView style={{flex:1}}>

                <View style={{flex:1}}>
                    <View style={{flex:1,paddingHorizontal:25}}>    
                        
                        <TouchableOpacity activeOpacity={0.6} onPress={()=> {navigation.navigate('AddPage')}}>
                            <View style={{height:60,backgroundColor:'white',borderRadius:20,justifyContent:'center',alignItems:'center',marginTop:50,shadowColor:'grey',shadowRadius:5,shadowOpacity:1,shadowOffset:{width:3,height:4}}}>
                                <Text style={{fontSize:16}}>ADD</Text>
                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity activeOpacity={0.6} onPress={()=> {navigation.navigate('ChangesPage')}}>
                            <View style={{height:60,backgroundColor:'white',borderRadius:20,justifyContent:'center',alignItems:'center',marginTop:50,shadowColor:'grey',shadowRadius:5,shadowOpacity:1,shadowOffset:{width:3,height:4}}}>                       
                                <Text style={{fontSize:16}}>MAKE CHANGES</Text>
                            </View>
                        </TouchableOpacity>
                        

                        <TouchableOpacity activeOpacity={0.6} onPress={()=> {navigation.navigate('DeletePage')}}>
                            <View style={{height:60,backgroundColor:'white',borderRadius:20,justifyContent:'center',alignItems:'center',marginTop:50,marginBottom:50,shadowColor:'grey',shadowRadius:5,shadowOpacity:1,shadowOffset:{width:3,height:3}}}> 
                                <Text style={{fontSize:16}}>DELETE</Text>     
                            </View>
                        </TouchableOpacity>
                        
                    </View>

                    {/* <View style={{marginVertical:20}}>
                        <Button title='Home' onPress={()=> {navigation.replace('Home')}} />
                    </View> */}

                </View>

            </ScrollView>
        </SafeAreaView>    
    )
}

export default AdminPage;