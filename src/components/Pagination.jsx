import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import WelcomeActionBtn from "./WelcomeActionBtns";

const Pagination = ({ data, ScrollX, index }) => {
  const { width } = Dimensions.get("screen");

  const lastIndex = data.length - 1;

  return (
    <View style={styles.container}>
      <View style={styles.dotContainer}>
        {data.map((_, idx) => {
          const inputRange = [
            (idx - 1) * width,
            idx * width,
            (idx + 1) * width,
          ];
          const dotWidth = ScrollX.interpolate({
            inputRange,
            outputRange: [12, 30, 12],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={idx.toString()}
              style={[
                styles.dot,
                { width: dotWidth },
                idx === index && styles.dotActive,
              ]}
            ></Animated.View>
          );
        })}
      </View>

      {index === lastIndex ? <WelcomeActionBtn /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 70,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  dotContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 15,
    backgroundColor: "#D9D9D9",
    marginHorizontal: 3,
  },
  dotActive: {
    backgroundColor: "#7D57C9",
  },
});

export default Pagination;
