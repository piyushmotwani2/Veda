import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from '../login/Login'
import Home from '../login/Home'
import Attendance from '../login/Attendance'
import Schedule from '../login/Schedule'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login} initial = {true} />
         <Scene key = "home" component = {Home} />
         <Scene key = "attendance" component = {Attendance} title = "Attendance" />
         <Scene key = "schedule" component = {Schedule} title = "Schedule" />
      </Scene>
   </Router>
)
export default Routes