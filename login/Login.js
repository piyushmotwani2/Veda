import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const Login = () => {
  state = { email: '', password: '', errorMessage: null }
  return(
    <View style = {
      {
        "alignItems": "flex-start",
        "flex": 1
      }
    } >
    <View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 78,
        "paddingTop": 248,
        "width": 640,
        "height": 1136,
        "borderWidth": 2,
        "borderColor": "rgba(64, 51, 238, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 48,
        "color": "rgba(108, 92, 189, 255)",
        "marginStart": 109
      }
    } > Hey, There! </Text>
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontSize": 22,
        "color": "rgba(58, 57, 57, 255)",
        "marginStart": 87,
        "marginTop": 15
      }
    } > Enter your credentials to login </Text>
    <TextInput style = {
      {
        "alignItems": "flex-start",
        "marginTop": 95,
        "width": 485,
        "height": 96,
        "borderRadius": 48,
        "backgroundColor": "rgba(244, 244, 254, 255)"
      }
    }
    />
    <TextInput style = {
      {
        "alignItems": "flex-start",
        "marginTop": 67,
        "width": 485,
        "height": 96,
        "borderRadius": 48,
        "backgroundColor": "rgba(244, 244, 254, 255)"
      }
    }
    />
    <TouchableOpacity style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 82,
        "paddingTop": 24,
        "marginStart": 119,
        "marginTop": 67,
        "width": 246,
        "height": 85,
        "borderRadius": 42.5,
        "backgroundColor": "rgba(108, 92, 189, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontSize": 32,
        "color": "rgba(255, 255, 255, 255)"
      }
    } > Login </Text>
    </TouchableOpacity>
    </View>
    </View>

  )
}

export default Login