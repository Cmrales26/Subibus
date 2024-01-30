import { Animated, FlatList, StyleSheet, View } from "react-native";
import React, { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import CardsItem from "./CardsItem";
import CardsPagination from "./CardsPagination";
const Cards = () => {
  const { user } = useAuth();
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
    <View style={{ height: 270 }}>
      <FlatList
        data={user.cards}
        renderItem={({ item, idx }) => <CardsItem item={item}></CardsItem>}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={true}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleonViewbleItemsChange}
        viewabilityConfig={viewabilityConfig}
      />
      <CardsPagination
        data={user.cards}
        ScrollX={ScrollX}
        index={index}
      ></CardsPagination>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({});
