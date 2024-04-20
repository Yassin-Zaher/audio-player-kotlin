import { View, Text, Button, TextInput } from "react-native";
import React from "react";

const PlayLists = ({ navigation, route }) => {
  const [postText, setPostText] = React.useState("");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: "white" }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate({
            name: "Home",
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </View>
  );
};

export default PlayLists;
