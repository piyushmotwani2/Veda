import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView } from 'react-native';

const Schedule = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1,
      backgroundColor:"#FFF"}}>
      <View style = {
      {
        "flexDirection": "row",
        "alignItems": "center",
        justifyContent: "center",
        "padding":20
      }
    } >
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 18,
        "color": "rgba(161, 154, 154, 255)"
      }
    } > S </Text>
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 18,
        "color": "rgba(108, 92, 189, 255)",
        "marginStart": 36.5
      }
    } > M </Text>
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 18,
        "color": "rgba(161, 154, 154, 255)",
        "marginStart": 36.5
      }
    } > T </Text>
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 18,
        "color": "rgba(161, 154, 154, 255)",
        "marginStart": 36.5
      }
    } > W </Text>
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 18,
        "color": "rgba(161, 154, 154, 255)",
        "marginStart": 36.5
      }
    } > T </Text>
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 18,
        "color": "rgba(161, 154, 154, 255)",
        "marginStart": 36.5
      }
    } > F </Text>
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 18,
        "color": "rgba(161, 154, 154, 255)",
        "marginStart": 36.5
      }
    } > S </Text>
    </View>
      <View style={
        {
          alignItems: "flex-start"
        }
      }>
      <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 18,
        "paddingTop":20,
        "paddingLeft":30,
        "color": "rgba(161, 154, 154, 255)"
      }
    } > 8 AM </Text>
      </View>
      <View style={{
        "alignItems": "center",
        "paddingTop": 10
      }}>
        <View style = {
      {
        "flexDirection": "row",
        "alignItems": "center",
        "paddingStart": 5,
        "paddingTop": 0,
        "marginTop": 5,
        "width": 375,
        "height": 50,
        "borderRadius": 10,
        "backgroundColor": "rgba(244, 244, 254, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 18,
        "paddingLeft":15,
        "marginLeft":"auto",
        "marginRight":"auto",
        "color": "rgba(161, 154, 154, 255)"
      }
    } > MAT1001 </Text>
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 18,
        "textAlign":"center",
        "marginLeft":"auto",
        "marginRight":"auto",
        "color": "rgba(161, 154, 154, 255)",
        "marginStart": 29
      }
    } > Engineering Calculus </Text>
        </View>
      </View>
      <View style={
        {
          alignItems: "flex-start"
        }
      }>
      <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 18,
        "paddingTop":20,
        "paddingLeft":30,
        "color": "rgba(108, 92, 189, 255)"
      }
    } > 9 AM </Text>
      </View>
      <View style={{
        "alignItems": "center",
        "paddingTop": 10
      }}>
        <View style = {
      {
        "flexDirection": "row",
        "alignItems": "center",
        "paddingStart": 5,
        "paddingTop": 0,
        "marginTop": 5,
        "width": 375,
        "height": 70,
        "borderRadius": 10,
        "backgroundColor": "rgba(108, 92, 189, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 18,
        "paddingLeft":15,
        "marginLeft":"auto",
        "marginRight":"auto",
        "color": "rgba(255, 255, 255, 255)"
      }
    } > CSE1001 </Text>
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 18,
        "textAlign":"center",
        "marginLeft":"auto",
        "marginRight":"auto",
        "color": "rgba(255, 255, 255, 255)",
        "marginStart": 29
      }
    } > Introduction to Prog.. </Text>
        </View>
      </View>
      <View style={
        {
          alignItems: "flex-start"
        }
      }>
      <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 18,
        "paddingTop":20,
        "paddingLeft":30,
        "color": "rgba(161, 154, 154, 255)"
      }
    } > 10 AM </Text>
      </View>
      <View style={{
        "alignItems": "center",
        "paddingTop": 10
      }}>
        <View style = {
      {
        "flexDirection": "row",
        "alignItems": "center",
        "paddingStart": 5,
        "paddingTop": 0,
        "marginTop": 5,
        "width": 375,
        "height": 50,
        "borderRadius": 10,
        "backgroundColor": "rgba(95, 238, 180, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 18,
        "paddingLeft":15,
        "marginLeft":"auto",
        "marginRight":"auto",
        "color": "rgba(255, 255, 255, 255)"
      }
    } > - </Text>
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 18,
        "textAlign":"center",
        "marginLeft":"auto",
        "marginRight":"auto",
        "color": "rgba(255, 255, 255, 255)",
        "marginStart": 29
      }
    } > Leisure </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Schedule;