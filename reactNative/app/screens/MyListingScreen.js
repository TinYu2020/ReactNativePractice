import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import listingsApi from '../api/listings';
import messages from '../api/messages';
import ListItem from '../components/lists/ListItem';
import Screen from '../components/Screen';

function MyListingScreen(props) {
    const { user } = useAuth();
    const [myListings, setMyListings] = useState();

    // useEffect(() => {
    //     getMyListings();
    // }, [])

    const getMyListings = async () => {
        const result = await listingsApi.getMyListings(user.userId);
        if (!result.ok)
            return Alert.alert(result, "Error", "Could not get My Listings.");
        setMyListings(result.data);
    }

    return (
        <Screen>
            <Text style={styles.text}>MY LISTINGS PAGE (TO BE DONE)</Text>
        </Screen>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        padding: 20,
    }
})

export default MyListingScreen;