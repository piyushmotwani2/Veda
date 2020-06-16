import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from '../login/Login'
import Assignment from '../login/Assignment'
import Attendance from '../login/Attendance'
import Schedule from '../login/Schedule'
import Loading from '../login/Loading'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login} title = "Login" />
         <Scene key = "loading" component = {Loading} title = "Loading" initial = {true} />
         <Scene key = "assignment" component = {Assignment} title = "Assignment" />
         <Scene key = "attendance" component = {Attendance} title = "Attendance" />
         <Scene key = "schedule" component = {Schedule} title = "Schedule" />
      </Scene>
   </Router>
)
export default Routes