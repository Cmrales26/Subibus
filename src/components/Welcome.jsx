import { View, FlatList, StyleSheet, Animated } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import slides from "../data/Welcome";
import WelcomeItem from "./WelcomeItem";
import Pagination from "./Pagination";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const [index, setIndex] = useState(0);
  const ScrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (e) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: ScrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(e);
  };

  const handleonViewbleItemsChange = useRef(({ viewableItems }) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({ item, idx }) => (
          <WelcomeItem
            item={item}
            isLastItem={idx === slides.length - 1}
          ></WelcomeItem>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item) => item.id}
        bounces={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleonViewbleItemsChange}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={slides} ScrollX={ScrollX} index={index} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Welcome;
