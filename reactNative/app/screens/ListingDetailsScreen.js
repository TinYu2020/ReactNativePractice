import React, { useEffect, useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";
import ContactSellerForm from "../components/ContactSellerForm";
import usersApi from "../api/users";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  const [sellerName, setSellerName] = useState("Seller Name");

  useEffect(() => {
    getUserInfo();
  });

  const getUserInfo = async () => {
    try {
      const result = await usersApi.getUserById(listing.userId);
      if (result.data) {
        const userInfo = result.data.filter(
          (user) => user.id === listing.userId
        );
        setSellerName(userInfo[0].name);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        uri={listing.images[0].url}
      />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            // image={require("../assets/mosh.jpg")}
            title={sellerName}
            subTitle={listing.subTitle}
          />
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
