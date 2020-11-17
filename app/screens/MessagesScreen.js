import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title:
      "Nonumy dolores aliquyam ipsum dolor nonumy dolor clita. Est et gubergren est et, ut aliquyam gubergren labore dolore dolor, labore takimata ut ea dolor erat lorem consetetur nonumy, et sed amet justo voluptua duo aliquyam et aliquyam, stet duo est sadipscing sed sadipscing dolor, invidunt sea dolore et sed kasd kasd et, ea amet dolore lorem no kasd. Diam vero voluptua clita rebum vero et consetetur sea justo, sed elitr est ea dolor, rebum ipsum at sea eos no elitr est ut, duo dolor dolor et ea dolor eirmod. Nonumy dolor eirmod sed no sanctus dolor et et sanctus, sea.",
    description: "D1Amet",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description:
      "Nonumy dolores aliquyam ipsum dolor nonumy dolor clita. Est et gubergren est et, ut aliquyam gubergren labore dolore dolor, labore takimata ut ea dolor erat lorem consetetur nonumy, et sed amet justo voluptua duo aliquyam et aliquyam, stet duo est sadipscing sed sadipscing dolor, invidunt sea dolore et sed kasd kasd et, ea amet dolore lorem no kasd. Diam vero voluptua clita rebum vero et consetetur sea justo, sed elitr est ea dolor, rebum ipsum at sea eos no elitr est ut, duo dolor dolor et ea dolor eirmod. Nonumy dolor eirmod sed no sanctus dolor et et sanctus, sea.",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            showChevrons={true}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        // pull down to refresh
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
