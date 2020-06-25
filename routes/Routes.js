import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from '../screens/Login'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Notifications from '../screens/Notifications'
import ClassRoom from '../screens/ClassRoom'
import Assignment from '../screens/Assignment'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login} hideNavBar={true}/>
         <Scene key = "home" component = {Home} hideNavBar={true}/>
         <Scene key = "profile" component = {Profile} hideNavBar={true}/> 
         <Scene key = "notification" component = {Notifications} hideNavBar={true}/> 
         <Scene key = "classroom" component = {ClassRoom} hideNavBar={true} initial = {true}/>
         <Scene key = "assignment" component = {Assignment} hideNavBar={true} />
      </Scene>
   </Router>
)
export default Routes