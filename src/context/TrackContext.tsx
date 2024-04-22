import {
  getPermissionsAsync,
  requestPermissionsAsync,
} from "expo-media-library";
import React, { Component } from "react";
import { Alert, Text, View } from "react-native";

export default class TrackContext extends Component {
  constructor(props) {
    super(props);
  }

  permessionAlert() {
    Alert.alert("Permission Required", "hhh dir allow malek khayef", [
      {
        text: "بان عليك الأمان",
        onPress: () => {
          this.getPermission();
        },
      },
      {
        text: "Cancel",
        onPress: () => {
          this.permessionAlert();
        },
      },
    ]);
  }

  getPermission = async () => {
    const permission = await getPermissionsAsync();
    if (permission.granted) {
      // get all the files
    }
    if (!permission.granted && permission.canAskAgain) {
      const { status, canAskAgain } = await requestPermissionsAsync();
      if (status === "denied" && canAskAgain) {
        // dipslay an alert that user have to accept permission
        this.permessionAlert();
      }
      if (status === "granted") {
        // get All the media files
      }
      if (status === "denied" && !canAskAgain) {
        // display an Error
      }
    }
  };
  componentDidMount(): void {
    getPermission();
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
