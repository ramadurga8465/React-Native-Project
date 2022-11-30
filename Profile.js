import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Alert,TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton  from './CustomButton';
import Login from './Login';
import {useNavigation} from '@react-navigation/native';

export default function Profile({navigation}) {
  const [name,setName] = useState('');
  useEffect(()=>{
    getData();

  },[]);
  const getData= () => {
    try{
        AsyncStorage.getItem('UserName')
        .then(value=>{
            if(value!= null){
                setName(value)
            }
        })
    } catch(error){
        console.log(error)
    }
}
const removeData = async() => {
  try{
    await AsyncStorage.clear();
    navigation.navigate('Login')
    console.log(value)
  }catch(error){
    console.log(error)
  }


}
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile page is{name}</Text> 
      <CustomButton title='Remove' onPressFunction={removeData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#848884',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:30,
    margin:10,
  }
});