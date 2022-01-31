import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const [isLoading, setLoading] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <WebView
          style={styles.webview}
          source={{ uri: "https://play.sure90.com/" }}
          // startInLoadingState={true}
          // renderLoading={() => (
          //   <View
          //     style={{
          //       flex: 1,
          //       justifyContent: "center",
          //       alignItems: "center",
          //       position: "absolute",
          //       height: "100%",
          //       width: "100%",
          //     }}
          //   >
          //     <ActivityIndicator color={"#B9002F"} size="large" />
          //   </View>
          // )}
          onLoadStart={(syntheticEvent) => {
            setLoading(true);
          }}
          onLoadEnd={(syntheticEvent) => {
            setLoading(false);
          }}
        />
        {isLoading && (
          <View
            style={{
              flex: 10,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              // position: "absolute",
              height: "100%",
              width: "100%",
            }}
          >
            <ActivityIndicator
              color="#6236FF"
              size="large"
              //   style={{position: 'absolute', left: 200, top: 300}}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
});
