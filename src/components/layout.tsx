import { Flex, Text } from "native-base";
import React from "react";
import { Avatar } from "./avatar";

interface LayoutProps {
  children: any;
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <Flex px="32px" pt="45px" bg="bg" flex={1}>
      <Flex
        w="100%"
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
        mb={8}
      >
        <Text fontFamily="heading" fontSize="3xl">
          {title}
        </Text>
        <Avatar />
      </Flex>
      <Flex flex={1}>{children}</Flex>
    </Flex>
  );
};
