import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Add = () => {

    const [image, setSelectedImage] = useState("");
  const handleCameraLaunch = () => {
    // setCount(count + 1);
    const options = {
      mediaType: "photo",
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled camera");
        Alert.alert('Alert','User cancelled camera')
      } else if (response.error) {
        console.log("Camera Error: ", response.error);
        Alert.alert('Camera Error',response.errorMessage)
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };

  const handleImagePicker = async () => {
    // setCount(count + 1);
    await launchImageLibrary({ mediaType: "photo" }, (response) => {
      setSelectedImage(response.assets[0].uri);
    });
  };
  const Box = ({ ImageUrl, BoxText, onPress }) => {
  return (
    <TouchableOpacity style={styles.boxContainer} onPress={onPress}>
      <Image source={ImageUrl} style={styles.boximg} />
      <Text
        style={{
          color: "black",
          fontFamily: "Poppins",
          marginTop: 5,
          fontSize: 15,
          marginLeft: "2%",
        }}
      >
        {BoxText}
      </Text>
    </TouchableOpacity>
  );
}




return (
  <ScrollView style={{flex:1,backgroundColor:'#f6f6f6'}}>
  <View style={styles.container}>
    <Text style={styles.headerText}>Upload</Text>

    <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
      <Box
        ImageUrl={require("../../assets/images/photo.png")}
        BoxText={"Open Camera"}
        onPress={handleCameraLaunch}
      />
      <Box
        ImageUrl={require("../../assets/images/gallery.png")}
        BoxText={"From Gallery"}
        onPress={handleImagePicker}
      />
    </View>
   
    {image ? <Image source={{ uri: image }} style={styles.image} /> : <></>}
  </View>
   </ScrollView>
);
};

export default Add;

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#f6f6f6",
  alignItems: "center",
  justifyContent: "center",
},
headerText: {
  fontFamily: "Sen-Bold",
  fontSize: 25,
  color: "black",
  textAlign: "center",
  marginBottom: 15,
  marginTop: "15%",
},
locationHeadText: {
  color: "black",
  fontFamily: "Sen",
  fontSize: 18,
  marginLeft: 20,
  marginTop: 7,
},
locationText: {
  color: "black",
  fontFamily: "Poppins",
  fontSize: 17,
},
image: {
  height: 300,
  width: 300,
  resizeMode: "contain",
},
locationView: {
  width: "100%",
  justifyContent: "space-evenly",
},
boxContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginVertical: 20,
  paddingHorizontal: 20,
},
boximg: {
  height: 32,
  width: 32,
},
loadingView: {
  justifyContent: "center",
  alignItems: "center",
  marginTop: 20,
  marginBottom: "30%",
  flexDirection: "row",
},
uploadText: {
  fontFamily: "Poppins",
  color: "black",
  marginLeft: 10,
},
});