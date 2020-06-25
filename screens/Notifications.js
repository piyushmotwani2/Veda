import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, ScrollView, Picker } from 'react-native';
import NotificationComponent from '../components/NotificationComponent';

const Notifications = ({ navigation }) => {
  return ( 
    <View> 
        <View style={{
            height: "30%",
            width: "100%"
        }}>

        </View>
    <ScrollView style={{ flex: 1,
        backgroundColor:"#FFF"}}>
                <NotificationComponent focus ="yes" message = "CSE 1001 class is about to start" time="5m" btype = "primary" btext = "Join" bwidth = "30%" bheight = "50%" />
                <NotificationComponent focus ="yes" message = "CSE 1001 class is about to start" time="5m" btype = "primary" btext = "Join" bwidth = "30%" bheight = "50%" /> 
    </ScrollView>
    </View>
  );
}


export default Notifications;