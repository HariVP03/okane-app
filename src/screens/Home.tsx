import { ArrowDownIcon, ArrowUpIcon, Flex } from "native-base";
import React from "react";
import { Layout } from "../components";
import { MuteButton } from "../components";

export function HomeScreen({ navigation: { navigate } }: any) {
  return (
    <Layout title="Home">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDir="row"
        flex={1}
      >
        <MuteButton
          leftIcon={<ArrowUpIcon />}
          title={"Send"}
          borderRadius="lg"
        />
        <MuteButton
          leftIcon={<ArrowDownIcon />}
          title={"Receive"}
          borderRadius="lg"
        />
      </Flex>
    </Layout>
  );
}
