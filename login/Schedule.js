import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import CardComponent from '../components/CardComponent';

const Schedule = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1,
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
      <CardComponent time ="8 AM" subID = "MAT1001" subName = "Engineering Calculus" status = "inactive"/>
      <CardComponent time ="9 AM" subID = "MAT1001" subName = "Engineering Calculus" status = "inactive"/>
      <CardComponent time ="10 AM" subID = "MAT1001" subName = "Engineering Calculus" status = "active"/>
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
    } > 1 PM </Text>
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
    </ScrollView>
  );
}

export default Schedule;