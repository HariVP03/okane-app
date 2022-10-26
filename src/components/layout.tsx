import { Flex, Text } from "native-base";
import React from "react";
import { Avatar } from "./avatar";

interface LayoutProps {
  children: any;
  title: string;
  showAvatar?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  showAvatar,
}) => {
  const [loggedIn, setLoggedIn] = React.useState(false);

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
        {showAvatar && <Avatar setLoggedIn={setLoggedIn} loggedIn={loggedIn} />}
      </Flex>
      <Flex flex={1}>{children}</Flex>
    </Flex>
  );
};
