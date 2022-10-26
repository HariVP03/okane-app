import { Avatar, Flex, Text } from "native-base";
import React from "react";

interface LayoutProps {
  children: any;
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <Flex px="32px" pt="45px" bg="#151515" flex={1}>
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
        <Avatar
          source={{
            uri: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          }}
          size="35px"
        />
      </Flex>
      {children}
    </Flex>
  );
};
