import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView } from 'react-native';

const Marks = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor:"#FFF", alignItems:"center"}}>
      <View style = {
      {
        flexDirection: 'row',
        alignItems: 'center'
      }
      } >
        <Text style = {
        {
          "fontFamily": "SF UI Text",
          "fontSize": 24,
          "color": "rgba(18, 18, 18, 255)",
          "marginTop": 47
        }
        } > Subject: </Text>
        <View style = {
      {
        flexDirection: 'row',
        "alignItems": "flex-start",
        "paddingStart": 24,
        "paddingTop": 10,
        "marginStart": 34,
        "marginTop": 47,
        "width": 180,
        "height": 40,
        "borderRadius": 35,
        "borderWidth": 1,
        "borderColor": "rgba(18, 18, 18, 255)"
      }
    } >
      <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontSize": 14,
        "color": "rgba(18, 18, 18, 255)",
        "textAlign":"center"
      }
    } > CSE1001 - Introdu. </Text>
    </View>
    </View>
    </View>
    </SafeAreaView>
  );
}


export default Marks;