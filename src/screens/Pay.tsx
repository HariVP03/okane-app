import { Button, Flex, Input, Text } from "native-base";
import React, { useState } from "react";
import { Linking, Platform } from "react-native";
import { Layout } from "../components";
import { ScreenProps } from "../types";
import { UPI_PREFIX } from "../utils/constants";

export function PayScreen({
  route: { params },
  navigation,
}: ScreenProps<"Pay">) {
  const [amount, setAmount] = useState("");

  const onPay = async () => {
    let upiId = params.raw;

    if (!upiId.includes("&am=&") || amount === "0") return;

    upiId = upiId.replace("&am=&", `&am=${amount}&`);

    if (Platform.OS === "ios") {
      const gpay = upiId.replace("upi:/", UPI_PREFIX.GOOGLEPAY);
      const paytm = upiId.replace("upi:/", UPI_PREFIX.PAYTM);

      if (!(await Linking.canOpenURL(gpay))) {
        await Linking.openURL(paytm);
      } else {
        await Linking.openURL(gpay);
      }
    }
  };

  return (
    <Layout title="Pay">
      <Flex mt={-300} justify="center" align="center" flex={1}>
        <Flex
          rounded="full"
          py={3}
          px={8}
          mb={8}
          borderWidth={1}
          maxW="100%"
          bg="mute"
          borderColor="teal.200"
        >
          <Text
            textAlign="center"
            fontSize="md"
            fontFamily="poppins"
            color="white"
          >
            {params.params.pn}
          </Text>
          <Text
            textAlign="center"
            fontSize="md"
            fontFamily="poppins"
            color="white"
          >
            {params.params.pa}
          </Text>
        </Flex>
        <Input
          autoFocus
          value={amount}
          leftElement={<Text fontSize="4xl">₹</Text>}
          h={100}
          fontSize="4xl"
          maxW={200}
          variant="underlined"
          fontFamily="poppins"
          keyboardType="numeric"
          textAlign="center"
          onChangeText={(val) => {
            if (isNaN(parseInt(val))) setAmount("");
            else setAmount(val);
          }}
        />

        <Button
          _text={{
            fontFamily: "poppins",
            fontSize: "2xl",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            w: 300,
            textAlign: "center",
          }}
          colorScheme="teal"
          w={250}
          onPress={onPay}
          h={65}
          mt={24}
          isDisabled={amount === ""}
        >
          {`Pay ₹${amount || 0}`}
        </Button>

        <Button
          mt={4}
          _text={{ color: "white" }}
          variant="link"
          onPress={() =>
            navigation.reset({ index: 0, routes: [{ name: "Home" }] })
          }
        >
          cancel
        </Button>
      </Flex>
    </Layout>
  );
}
