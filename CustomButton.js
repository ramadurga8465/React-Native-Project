import React from 'react';
import {Pressable,Text,StyleSheet} from 'react-native';
const CustomButton = (props) =>{
    return(
        <Pressable onPress={props.onPressFunction}>
            <Text style={styles.text}>
                {props.title}
                </Text>
          
            </Pressable>
    )
}
const styles = StyleSheet.create({
    text:{
        fontSize:20,
        margin:10
    },

})
export default CustomButton;