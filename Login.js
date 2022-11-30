import React ,{useState,useEffect} from 'react';
import {View,StyleSheet,TextInput,Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from './CustomButton';
import {useNavigation} from '@react-navigation/native';
export default function Login({navigation}){
    // const navigation=useNavigation();
    const [name,setName] = useState('');
    useEffect(() => {
        getData();

    },[]);
    const getData= () => {
        try{
            AsyncStorage.getItem('UserName')
            .then(value=>{
                if(value!= null){
                    navigation.navigate('Profile')
                }
            })
        } catch(error){
            console.log(error)
        }
    }
    const setData = async() => {
        if(name.length == 0){
            Alert.alert('Warning','please enter your data')
        }
        else{
            try{
                await AsyncStorage.setItem('UserName',name);
                navigation.navigate("Profile")
                // console.log(value)
            }catch(error){
                console.log(error)
            }
        }
    }

    return(
        <View style={styles.body}>
            <TextInput style={styles.input} placeholder='enter name'  onChangeText={(value) => setName(value)} />
            <CustomButton title='Login' onPressFunction={setData}  />


        </View>
    )

}
const styles= StyleSheet.create({
    body:{
        flex:1,
        alignItems:'center',
    },
    input:{
        width:300,
        borderwidth:1,
        borderColor:'#555',
        borderRadius:10,
        backgroundColor:'#ffffff',
        textAlign:'center',
        fontSize:20,
        marginBottom:10,
        height:50,
        marginTop:150
    }
})











