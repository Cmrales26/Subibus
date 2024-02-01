import { StyleSheet, Text, View } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useCallback, useMemo, useRef, useState } from "react";
import { Button } from "react-native-paper";

const ConfirmRecharge = ({ income, cardName }) => {
  const sheetRef = useRef<BottomSheet>(null);
  const [isopen, setIsOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(-1);
  const snapPoints = useMemo(() => ["70%", "90%", "120%"], []);

  const handlePresentModalPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Button
          style={{ marginTop: 20, width: "50%", alignItems: "center" }}
          onPress={() => handlePresentModalPress(1)}
          mode="contained"
        >
          Recargar
        </Button>
      </View>
      <GestureHandlerRootView style={{ height: 300 }}>
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          index={initialIndex}
          onClose={() => setIsOpen(false)}
        >
          <ScrollView>
            <BottomSheetView>
              <Text>{income}</Text>
              <Text>{cardName}</Text>
            </BottomSheetView>
          </ScrollView>
        </BottomSheet>
      </GestureHandlerRootView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    bottom: 1,
    width: "100%",
  },
});

export default ConfirmRecharge;
