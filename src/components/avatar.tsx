import { useNavigation } from "@react-navigation/native";
import {
  Menu,
  Pressable,
  Avatar as NativeBaseAvatar,
  Button,
  useToast,
  Box,
  Toast,
} from "native-base";
import React, { useMemo } from "react";
import { signOut } from "firebase/auth";
import { auth, logOut } from "../firebase";
import { useAtom } from "jotai";
import { userAtom } from "../atoms";

interface AvatarDropDownOptionsType {
  name: string;
  onPress: () => void;
  isDisabled?: boolean;
}

interface AvatarProps {}

export const Avatar: React.FC<AvatarProps> = () => {
  const nav = useNavigation();
  const [user] = useAtom(userAtom);

  const AvatarDropDownOptions = useMemo<AvatarDropDownOptionsType[]>(
    () => [
      {
        name: "Profile",
        onPress: () => {},
        isDisabled: true,
      },
      {
        name: "Your transactions",
        onPress: () => {},
        isDisabled: true,
      },
      {
        name: "Settings",
        onPress: () => {},
        isDisabled: true,
      },
      {
        name: "Logout",
        onPress: () => {
          logOut();
        },
      },
    ],
    []
  );

  if (!user) {
    return (
      <Button
        _text={{ fontSize: "xs", color: "white", fontFamily: "body", px: 0 }}
        size="xs"
        minW="0"
        minH="0"
        px={4}
        onPress={() => {
          nav.navigate("Signup");
        }}
        colorScheme="coolGray"
        variant="outline"
      >
        Signup
      </Button>
    );
  }

  return (
    <Menu
      w="190px"
      trigger={(triggerProps) => {
        return (
          <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <NativeBaseAvatar
              source={{
                uri: `https://avatars.dicebear.com/api/big-smile/${user.email}.png`,
              }}
              size="35px"
              display="flex"
              bg="mute"
            />
          </Pressable>
        );
      }}
    >
      {AvatarDropDownOptions.map((option) => (
        <Menu.Item key={option.name} {...option}>
          {option.name}
        </Menu.Item>
      ))}
    </Menu>
  );
};
