import { useAtom } from "jotai";
import { ArrowDownIcon, ArrowUpIcon, Flex } from "native-base";
import React from "react";
import { userAtom } from "../atoms";
import { Layout } from "../components";
import { MuteButton } from "../components";
import { NavigationProps, ScreenProps } from "../types";

export function HomeScreen({ navigation: { navigate } }: ScreenProps<"Home">) {
  const [user] = useAtom(userAtom);

  return (
    <Layout title="Home" showAvatar>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDir="row"
        flex={1}
      >
        <MuteButton
          leftIcon={<ArrowUpIcon />}
          title={"Send"}
          isDisabled={!user}
          borderRadius="lg"
          onPress={() => navigate("Scan")}
        />

        <MuteButton
          leftIcon={<ArrowDownIcon />}
          title={"Receive"}
          isDisabled={!user}
          borderRadius="lg"
        />
      </Flex>
    </Layout>
  );
}
