import React from 'react';
import {View,Text,ImageBackground,Image,Button} from 'react-native';
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer'
import myimg from './assets/profile.jpg'
import mybg from './assets/bgimg.jpg'
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
const CustomDrawer = (props) => {
    const navigation=useNavigation();
    return(
        <View style={{flex:1}}>
       <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#7393B3'}}>
        <ImageBackground source={mybg} >
        <Image source={myimg} style={{padding:20,width:80,height:80,marginLeft:15,marginTop:10,borderRadius:40,marginBottom:10}}>
           
            </Image>
            <Text style={{color:'#fff',marginLeft:15,fontSize:30}}>Shancai</Text>
            </ImageBackground>
            <View style={{flex:1,backgroundColor:'#fff',paddingTop:10}}>
        <DrawerItemList {...props}/>
        </View>
        </DrawerContentScrollView>
        <View>
            
            <Text>
            
                <Button style={{marginLeft:20,marginBottom:10}} title="LogOut" onPress={() => navigation.navigate('Home')}/>
                </Text>
            {/* <Button onPress={() => navigation.goBack()} title="LogOut" /> */}
            </View>
        </View>
    )

}
export default CustomDrawer;