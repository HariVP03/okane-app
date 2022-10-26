import { ArrowDownIcon, ArrowUpIcon, Flex } from "native-base";
import React from "react";
import { Layout } from "../components";
import { ButtonWithIcon } from "../components/button-with-icon";

export function HomeScreen({ navigation: { navigate } }: any) {
  return (
    <Layout title="Home">
      <Flex justifyContent="space-between" flexDir="row" flex={1}>
        <ButtonWithIcon
          fontFamily="poppins-bold"
          leftIcon={<ArrowUpIcon />}
          title={"Send"}
          borderRadius="lg"
        />
        <ButtonWithIcon
          fontFamily="poppins-bold"
          leftIcon={<ArrowDownIcon />}
          title={"Receive"}
          borderRadius="lg"
        />
      </Flex>
    </Layout>
  );
}
