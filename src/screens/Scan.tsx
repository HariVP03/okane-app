import { Actionsheet, Box, Flex, Text } from "native-base";
import React, { useEffect } from "react";
import { Layout } from "../components";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import { transformUpiId } from "../utils";

export function ScanScreen() {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const nav = useNavigation();

  useEffect(() => {
    requestPermission();
  }, []);

  if (!permission || !permission?.granted) {
    return (
      <Layout title="Scan">
        <Actionsheet isOpen={true}>
          <Actionsheet.Content>
            <Box w="100%" h={60} px={4} justifyContent="center">
              <Text fontSize="16">Something went wrong :/</Text>
            </Box>

            <Actionsheet.Item onPress={() => requestPermission()}>
              Request permission again
            </Actionsheet.Item>

            <Actionsheet.Item onPress={() => nav.goBack()}>
              Go back
            </Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      </Layout>
    );
  }

  return (
    <Layout title="Scan">
      <Flex justify="center" align="center">
        <Camera
          onBarCodeScanned={({ data }) => {
            nav.navigate("Pay", transformUpiId(data));
          }}
          style={{ width: 500, height: 500 }}
        />
      </Flex>
    </Layout>
  );
}
