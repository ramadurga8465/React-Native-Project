import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawer from './CustomDrawer';
import Home from './Home';
import Settings from './Settings';
import Notifications from './Notifications';
import About from './About';
import Profile from './Profile';
import Messages from './Messages';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Login from './Login';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={Home} options={{
        drawerIcon:({color})=>(
          <Icon name='home' size={22} color={color} />
        )
        
      }}/>
      <Drawer.Screen name="Profile" component={Profile} 
      options={{
        drawerIcon:({color})=>(
          <Icon name='person' size={22} color={color} />
        )
        
      }} />
      <Drawer.Screen name="Messages" component={Messages} 
      options={{
        drawerIcon:({color})=>(
          <Icon name='chat' size={22} color={color} />
        )
        
      }}/>
      <Drawer.Screen name="Settings" component={Settings} 
      options={{
        drawerIcon:({color})=>(
          <Icon name='settings' size={22} color={color} />
        )
        
      }}/>
      <Drawer.Screen name="Notifications" component={Notifications} 
      options={{
        drawerIcon:({color})=>(
          <Icon name='notifications' size={22} color={color} />
        )
        
      }}/>
      <Drawer.Screen name="About" component={About} 
      options={{
        drawerIcon:({color})=>(
          <Icon name='info' size={22} color={color} />
        )
        
      }}/>

       <Drawer.Screen name="Login" component={Login} 
      options={{
        drawerIcon:({color})=>(
          <Icon name='login' size={22} color={color} />
        )
        
      }}/>
      
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

